(function () {
  const config = window.SUTTER_BACKEND || {};
  const sessionKey = "sutterButtesSupabaseSession";

  function isConfigured() {
    return config.provider === "supabase" && Boolean(config.url && config.anonKey);
  }

  function getSession() {
    try {
      return JSON.parse(localStorage.getItem(sessionKey) || "null");
    } catch {
      return null;
    }
  }

  function setSession(session) {
    if (!session) {
      localStorage.removeItem(sessionKey);
      return;
    }
    localStorage.setItem(sessionKey, JSON.stringify(session));
  }

  async function request(path, options = {}) {
    if (!isConfigured()) throw new Error("Backend is not configured.");
    const session = getSession();
    const headers = {
      apikey: config.anonKey,
      Authorization: `Bearer ${session?.access_token || config.anonKey}`,
      "Content-Type": "application/json",
      Prefer: options.prefer || "return=representation",
      ...(options.headers || {})
    };

    const response = await fetch(`${config.url}${path}`, {
      ...options,
      headers
    });

    if (!response.ok) {
      const detail = await response.text();
      throw new Error(detail || `Backend request failed: ${response.status}`);
    }

    if (response.status === 204) return null;
    return response.json();
  }

  async function uploadImage(file, folder = "uploads") {
    if (!isConfigured()) throw new Error("Backend is not configured.");
    const session = getSession();
    if (!session?.access_token) throw new Error("Sign in before uploading images.");
    const extension = (file.name.split(".").pop() || "jpg").toLowerCase().replace(/[^a-z0-9]/g, "") || "jpg";
    const cleanFolder = folder.toLowerCase().replace(/[^a-z0-9/_-]/g, "-");
    const path = `${cleanFolder}/${Date.now()}-${Math.random().toString(36).slice(2)}.${extension}`;
    const response = await fetch(`${config.url}/storage/v1/object/app-images/${path}`, {
      method: "POST",
      headers: {
        apikey: config.anonKey,
        Authorization: `Bearer ${session.access_token}`,
        "Content-Type": file.type || "application/octet-stream",
        "x-upsert": "true"
      },
      body: file
    });

    if (!response.ok) {
      const detail = await response.text();
      throw new Error(detail || `Image upload failed: ${response.status}`);
    }

    return `${config.url}/storage/v1/object/public/app-images/${path}`;
  }

  async function signIn(email, password) {
    if (!isConfigured()) throw new Error("Backend is not configured.");
    const response = await fetch(`${config.url}/auth/v1/token?grant_type=password`, {
      method: "POST",
      headers: {
        apikey: config.anonKey,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    });

    if (!response.ok) {
      const detail = await response.text();
      throw new Error(detail || "Sign in failed.");
    }

    const session = await response.json();
    setSession(session);
    return session;
  }

  function signOut() {
    setSession(null);
  }

  function hasSession() {
    return Boolean(getSession()?.access_token);
  }

  function getCurrentUser() {
    return getSession()?.user || null;
  }

  function toProductRow(item) {
    return {
      local_id: item.id,
      name: item.name,
      price: Number(item.price || 0),
      category: item.category || "Flower",
      subcategory: item.subcategory || "",
      brand: item.brand || "",
      description: item.description || "",
      image_url: item.image || "",
      variants: item.variants || [],
      stock: Number(item.stock || 0),
      daily_limit: Number(item.limit || 0),
      tags: item.tags || "",
      active: Boolean(item.active)
    };
  }

  function fromProductRow(row) {
    return {
      id: row.local_id || row.id,
      name: row.name,
      price: Number(row.price || 0),
      category: row.category || "Flower",
      subcategory: row.subcategory || "",
      brand: row.brand || "",
      description: row.description || "",
      image: row.image_url || "",
      variants: row.variants || [],
      stock: Number(row.stock || 0),
      limit: Number(row.daily_limit || 0),
      tags: row.tags || "",
      active: Boolean(row.active)
    };
  }

  function getOrderCustomerMessage(order = {}) {
    return String(
      order.customerMessage ||
      order.customerVisibleMessage ||
      order.deniedReasonCustomer ||
      ""
    ).trim();
  }

  function toOrderRow(order, includeCustomerEmail = true, includeMemberFields = true, includeTrackingFields = true) {
    const row = {
      order_number: order.id,
      customer_name: order.customer,
      phone: order.phone,
      contact_method: order.contactMethod || "Text",
      address: order.address,
      instructions: order.instructions || "",
      delivery_option: order.deliveryOption || "",
      delivery_window: order.deliveryWindow || "",
      assigned_to: order.assignedTo || "",
      items: order.items || [],
      compliance: order.compliance || {},
      activity: order.activity || [],
      status: order.status || "Submitted",
      admin_note: order.adminNote || "",
      subtotal: Number(order.subtotal || 0),
      discount: Number(order.discount || 0),
      bundle_discount: Number(order.bundleDiscount || 0),
      tax: Number(order.tax || 0),
      delivery_fee: Number(order.deliveryFee || 0),
      admin_discount: Number(order.adminDiscount || 0),
      total: Number(order.total || 0),
      promo_code: order.promoCode || "",
      promo_label: order.promoLabel || ""
    };
    if (includeTrackingFields) {
      row.customer_visible_message = getOrderCustomerMessage(order);
      row.estimated_delivery_time = order.estimatedDeliveryTime || "";
      row.estimated_delivery_date = order.estimatedDeliveryDate || "";
      row.completed_at = order.completedAt || null;
      row.denied_reason_customer = order.deniedReasonCustomer || "";
    }
    if (includeCustomerEmail) row.customer_email = order.customerEmail || "";
    if (includeMemberFields) {
      row.member_id = order.memberId || "";
      row.member_code = order.memberCode || "";
      row.access_lane = order.accessLane || "";
    }
    return row;
  }

  function fromOrderRow(row) {
    return {
      id: row.order_number,
      customer: row.customer_name,
      phone: row.phone,
      customerEmail: row.customer_email || "",
      contactMethod: row.contact_method,
      address: row.address,
      instructions: row.instructions || "",
      deliveryOption: row.delivery_option || "",
      deliveryWindow: row.delivery_window || "",
      assignedTo: row.assigned_to || "",
      items: row.items || [],
      compliance: row.compliance || {},
      activity: row.activity || [],
      detail: `${(row.items || []).length} line item${(row.items || []).length === 1 ? "" : "s"} - cash due $${Number(row.total || 0).toFixed(2)}`,
      status: row.status,
      adminNote: row.admin_note || "",
      subtotal: Number(row.subtotal || 0),
      discount: Number(row.discount || 0),
      bundleDiscount: Number(row.bundle_discount || 0),
      tax: Number(row.tax || 0),
      deliveryFee: Number(row.delivery_fee || 0),
      adminDiscount: Number(row.admin_discount || 0),
      total: Number(row.total || 0),
      promoCode: row.promo_code || "",
      promoLabel: row.promo_label || "",
      customerMessage: row.customer_visible_message || "",
      customerVisibleMessage: row.customer_visible_message || "",
      estimatedDeliveryTime: row.estimated_delivery_time || "",
      estimatedDeliveryDate: row.estimated_delivery_date || "",
      completedAt: row.completed_at || "",
      deniedReasonCustomer: row.denied_reason_customer || "",
      memberId: row.member_id || "",
      memberCode: row.member_code || "",
      accessLane: row.access_lane || "",
      createdAt: row.created_at || "",
      updatedAt: row.updated_at || ""
    };
  }

  function toFeedbackRow(message) {
    return {
      name: message.name,
      phone: message.phone,
      message: message.message,
      status: message.status || "New",
      admin_note: message.adminNote || ""
    };
  }

  function fromFeedbackRow(row) {
    return {
      id: row.id,
      name: row.name,
      phone: row.phone,
      message: row.message,
      status: row.status || "New",
      adminNote: row.admin_note || "",
      createdAt: row.created_at,
      updatedAt: row.updated_at
    };
  }

  function fromLookupOrderRow(row) {
    const safeActivity = Array.isArray(row.activity)
      ? row.activity.map((entry) => ({ at: entry.at || entry.created_at || "", action: entry.action || "" }))
      : [];
    return fromOrderRow({
      order_number: row.order_number,
      customer_name: "",
      phone: "",
      customer_email: "",
      contact_method: row.contact_method,
      address: "",
      instructions: "",
      delivery_option: row.delivery_option,
      delivery_window: row.delivery_window,
      assigned_to: "",
      items: [],
      compliance: {},
      activity: safeActivity,
      status: row.status,
      admin_note: "",
      subtotal: row.subtotal,
      discount: row.discount,
      bundle_discount: row.bundle_discount,
      tax: row.tax,
      delivery_fee: row.delivery_fee,
      admin_discount: row.admin_discount,
      total: row.total,
      promo_code: row.promo_code,
      promo_label: row.promo_label,
      customer_visible_message: row.customer_visible_message || "",
      estimated_delivery_time: row.estimated_delivery_time || "",
      estimated_delivery_date: row.estimated_delivery_date || "",
      completed_at: row.completed_at || "",
      denied_reason_customer: row.denied_reason_customer || "",
      member_id: "",
      member_code: "",
      access_lane: "",
      created_at: row.created_at || "",
      updated_at: row.updated_at || ""
    });
  }

  function isMissingCustomerEmailColumn(error) {
    return String(error?.message || "").includes("customer_email");
  }

  function isMissingMemberOrderColumn(error) {
    const message = String(error?.message || "");
    return message.includes("member_id") || message.includes("member_code") || message.includes("access_lane");
  }

  function isMissingTrackingColumn(error) {
    const message = String(error?.message || "");
    return [
      "customer_visible_message",
      "estimated_delivery_time",
      "estimated_delivery_date",
      "completed_at",
      "denied_reason_customer"
    ].some((column) => message.includes(column));
  }

  function toMemberRow(member) {
    return {
      member_id: member.id || member.memberId,
      member_name: member.name,
      member_code: member.code || null,
      phone: member.phone || "",
      email: member.email || "",
      status: member.status || "pending",
      notes: member.notes || "",
      contact_method: member.contactMethod || "Text",
      approved_at: member.approvedAt || null,
      last_order_at: member.lastOrderAt || null
    };
  }

  function fromMemberRow(row) {
    return {
      id: row.member_id,
      name: row.member_name || "",
      code: row.member_code || "",
      phone: row.phone || "",
      email: row.email || "",
      status: row.status || "pending",
      notes: row.notes || "",
      contactMethod: row.contact_method || "Text",
      createdAt: row.created_at || "",
      approvedAt: row.approved_at || "",
      lastOrderAt: row.last_order_at || ""
    };
  }

  window.SutterBackend = {
    isConfigured,
    hasSession,
    getCurrentUser,
    signIn,
    signOut,
    uploadImage,
    async loadProducts() {
      const rows = await request("/rest/v1/products?select=*&order=created_at.desc", { method: "GET", prefer: "" });
      return rows.map(fromProductRow);
    },
    async saveProducts(items) {
      if (!items.length) return null;
      return request("/rest/v1/products?on_conflict=local_id", {
        method: "POST",
        prefer: "resolution=merge-duplicates,return=minimal",
        body: JSON.stringify(items.map(toProductRow))
      });
    },
    async loadOrders() {
      const rows = await request("/rest/v1/orders?select=*&order=created_at.desc", { method: "GET", prefer: "" });
      return rows.map(fromOrderRow);
    },
    async saveOrder(order) {
      const options = {
        method: "POST",
        prefer: "resolution=merge-duplicates,return=minimal"
      };
      try {
        return await request("/rest/v1/orders?on_conflict=order_number", {
          ...options,
          body: JSON.stringify(toOrderRow(order))
        });
      } catch (error) {
        if (!isMissingCustomerEmailColumn(error) && !isMissingMemberOrderColumn(error) && !isMissingTrackingColumn(error)) throw error;
        return request("/rest/v1/orders?on_conflict=order_number", {
          ...options,
          body: JSON.stringify(toOrderRow(order, !isMissingCustomerEmailColumn(error), !isMissingMemberOrderColumn(error), false))
        });
      }
    },
    async submitCustomerOrder(order) {
      const options = {
        method: "POST",
        prefer: "return=minimal"
      };
      try {
        return await request("/rest/v1/orders", {
          ...options,
          body: JSON.stringify(toOrderRow(order))
        });
      } catch (error) {
        if (!isMissingCustomerEmailColumn(error) && !isMissingMemberOrderColumn(error) && !isMissingTrackingColumn(error)) throw error;
        return request("/rest/v1/orders", {
          ...options,
          body: JSON.stringify(toOrderRow(order, !isMissingCustomerEmailColumn(error), !isMissingMemberOrderColumn(error), false))
        });
      }
    },
    async saveOrders(orders) {
      if (!orders.length) return null;
      const options = {
        method: "POST",
        prefer: "resolution=merge-duplicates,return=minimal"
      };
      try {
        return await request("/rest/v1/orders?on_conflict=order_number", {
          ...options,
          body: JSON.stringify(orders.map((order) => toOrderRow(order)))
        });
      } catch (error) {
        if (!isMissingCustomerEmailColumn(error) && !isMissingMemberOrderColumn(error) && !isMissingTrackingColumn(error)) throw error;
        return request("/rest/v1/orders?on_conflict=order_number", {
          ...options,
          body: JSON.stringify(orders.map((order) => toOrderRow(order, !isMissingCustomerEmailColumn(error), !isMissingMemberOrderColumn(error), false)))
        });
      }
    },
    async loadSetting(key) {
      const rows = await request(`/rest/v1/app_settings?key=eq.${encodeURIComponent(key)}&select=value`, { method: "GET", prefer: "" });
      return rows[0]?.value || null;
    },
    async saveSetting(key, value) {
      return request("/rest/v1/app_settings?on_conflict=key", {
        method: "POST",
        prefer: "resolution=merge-duplicates,return=minimal",
        body: JSON.stringify({ key, value })
      });
    },
    async loadAccessCodes() {
      let rows;
      try {
        rows = await request("/rest/v1/access_codes?id=eq.default&select=customer_code,admin_code,invite_codes,guest_code,guest_label,guest_expires", { method: "GET", prefer: "" });
      } catch (error) {
        if (!String(error?.message || "").includes("guest_code")) throw error;
        rows = await request("/rest/v1/access_codes?id=eq.default&select=customer_code,admin_code,invite_codes", { method: "GET", prefer: "" });
      }
      const row = rows[0];
      return row ? {
        customer: row.customer_code,
        admin: row.admin_code,
        guest: {
          code: row.guest_code || "GUEST2026",
          label: row.guest_label || "Weekly Guest Code",
          expires: row.guest_expires || ""
        },
        invites: []
      } : null;
    },
    async saveAccessCodes(codes) {
      const payload = {
        id: "default",
        customer_code: codes.customer,
        admin_code: codes.admin,
        invite_codes: [],
        guest_code: codes.guest?.code || "",
        guest_label: codes.guest?.label || "Weekly Guest Code",
        guest_expires: codes.guest?.expires || ""
      };
      try {
        return await request("/rest/v1/access_codes?on_conflict=id", {
          method: "POST",
          prefer: "resolution=merge-duplicates,return=minimal",
          body: JSON.stringify(payload)
        });
      } catch (error) {
        if (!String(error?.message || "").includes("guest_code")) throw error;
        return request("/rest/v1/access_codes?on_conflict=id", {
          method: "POST",
          prefer: "resolution=merge-duplicates,return=minimal",
          body: JSON.stringify({ id: "default", customer_code: codes.customer, admin_code: codes.admin, invite_codes: [] })
        });
      }
    },
    async submitMemberRequest(member) {
      return request("/rest/v1/members", {
        method: "POST",
        prefer: "return=minimal",
        body: JSON.stringify(toMemberRow({ ...member, status: "pending", code: "" }))
      });
    },
    async loadMembers() {
      const rows = await request("/rest/v1/members?select=*&order=created_at.desc", { method: "GET", prefer: "" });
      return rows.map(fromMemberRow);
    },
    async saveMember(member) {
      return request("/rest/v1/members?on_conflict=member_id", {
        method: "POST",
        prefer: "resolution=merge-duplicates,return=minimal",
        body: JSON.stringify(toMemberRow(member))
      });
    },
    async saveMembers(members) {
      if (!members.length) return null;
      return request("/rest/v1/members?on_conflict=member_id", {
        method: "POST",
        prefer: "resolution=merge-duplicates,return=minimal",
        body: JSON.stringify(members.map(toMemberRow))
      });
    },
    async lookupMemberByCode(memberCode) {
      const rows = await request("/rest/v1/rpc/lookup_member_access", {
        method: "POST",
        prefer: "",
        body: JSON.stringify({ member_code_input: memberCode })
      });
      return rows[0] ? fromMemberRow(rows[0]) : null;
    },
    async submitFeedback(message) {
      return request("/rest/v1/feedback_messages", {
        method: "POST",
        prefer: "return=minimal",
        body: JSON.stringify(toFeedbackRow(message))
      });
    },
    async loadFeedback() {
      const rows = await request("/rest/v1/feedback_messages?select=*&order=created_at.desc", { method: "GET", prefer: "" });
      return rows.map(fromFeedbackRow);
    },
    async updateFeedback(message) {
      return request(`/rest/v1/feedback_messages?id=eq.${encodeURIComponent(message.id)}`, {
        method: "PATCH",
        prefer: "return=minimal",
        body: JSON.stringify(toFeedbackRow(message))
      });
    },
    async lookupCustomerOrder(orderNumber) {
      const rows = await request("/rest/v1/rpc/lookup_member_order", {
        method: "POST",
        prefer: "",
        body: JSON.stringify({ order_number_input: orderNumber })
      });
      return rows[0] ? fromLookupOrderRow(rows[0]) : null;
    },
    async lookupMemberOwnedOrder(orderNumber, memberId = "", memberCode = "") {
      const rows = await request("/rest/v1/rpc/lookup_member_owned_order", {
        method: "POST",
        prefer: "",
        body: JSON.stringify({
          order_number_input: orderNumber,
          member_id_input: memberId,
          member_code_input: memberCode
        })
      });
      return rows[0] ? fromLookupOrderRow(rows[0]) : null;
    },
    async lookupMemberRecentReceipts(memberId = "", memberCode = "") {
      const rows = await request("/rest/v1/rpc/lookup_member_recent_receipts", {
        method: "POST",
        prefer: "",
        body: JSON.stringify({
          member_id_input: memberId,
          member_code_input: memberCode,
          limit_count: 5
        })
      });
      return rows.map(fromLookupOrderRow);
    }
  };
})();
