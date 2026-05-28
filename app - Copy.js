const merchants = [
  {
    name: "Tractor Gas",
    type: "flower",
    detail: "Gelato 41 x Lemon Fuel - flower drop",
    image: "assets/tractor-gas.svg"
  },
  {
    name: "Zodashi",
    type: "flower",
    detail: "Zoda x Zonuts - curated drop",
    image: "assets/zodashi.svg"
  },
  {
    name: "Dog Food",
    type: "flower",
    detail: "Lemon Cherry Gelato x London Poundcake x Jealousy",
    image: "assets/dog-food.svg"
  },
  {
    name: "Rosin Syrups",
    type: "syrup",
    detail: "Cucumber, pineapple, watermelon, chile mango",
    image: "assets/rosin-syrups.svg"
  },
  {
    name: "Permanent Marker Rosin",
    type: "concentrate",
    detail: "Solventless concentrate - small batch",
    image: "assets/zodashi.svg"
  },
  {
    name: "Sutter Buttes Hat",
    type: "apparel",
    detail: "Logo apparel - limited colorway",
    image: "assets/sutter-hat.svg"
  }
];

const defaultMerchantOrders = [
  {
    id: "#4191",
    customer: "Test Customer",
    address: "Yuba City, CA",
    instructions: "ID check required at delivery.",
    detail: "2 products - cash due at delivery",
    status: "Verify",
    adminNote: "",
    subtotal: 70,
    discount: 0,
    adminDiscount: 0,
    deliveryFee: 0,
    total: 70
  },
  {
    id: "#4197",
    customer: "Sample Order",
    address: "Sutter County",
    instructions: "Driver assigned.",
    detail: "1 syrup, 1 flower jar - cash due at delivery",
    status: "Pack",
    adminNote: "",
    subtotal: 70,
    discount: 0,
    adminDiscount: 0,
    deliveryFee: 0,
    total: 70
  },
  {
    id: "#4200",
    customer: "Merch Pickup",
    address: "Yuba City, CA",
    instructions: "Logo hat with verified order.",
    detail: "Logo hat - cash due at delivery",
    status: "Queued",
    adminNote: "",
    subtotal: 30,
    discount: 0,
    adminDiscount: 0,
    deliveryFee: 0,
    total: 30
  }
];

const defaultFlowerVariants = [
  { label: "1/8", price: 42 },
  { label: "1/4", price: 75 },
  { label: "Half oz", price: 140 },
  { label: "Full oz", price: 260 }
];
const defaultProductImage = "assets/tractor-gas.svg";

const defaultCatalog = [
  { id: "item-1", name: "Tractor Gas Flower", price: 42, category: "Flower", description: "Gelato 41 x Lemon Fuel strain art drop. Larger amounts available by direct inquiry.", image: "assets/tractor-gas.svg", active: true, variants: defaultFlowerVariants },
  { id: "item-2", name: "Zodashi Flower", price: 42, category: "Flower", description: "Zoda x Zonuts with bold samurai artwork. Larger amounts available by direct inquiry.", image: "assets/zodashi.svg", active: true, variants: defaultFlowerVariants },
  { id: "item-3", name: "Dog Food Flower", price: 42, category: "Flower", description: "Lemon Cherry Gelato x London Poundcake x Jealousy. Larger amounts available by direct inquiry.", image: "assets/dog-food.svg", active: true, variants: defaultFlowerVariants },
  { id: "item-4", name: "Cucumber Peppino Syrup", price: 28, category: "Syrup", description: "THC tincture syrup, cucumber lime profile.", image: "assets/rosin-syrups.svg", active: true },
  { id: "item-5", name: "Pineapple Pina Syrup", price: 28, category: "Syrup", description: "THC tincture syrup with pineapple flavor.", image: "assets/rosin-syrups.svg", active: true },
  { id: "item-6", name: "Watermelon Tamarindo Syrup", price: 28, category: "Syrup", description: "THC tincture syrup with watermelon tamarindo flavor.", image: "assets/rosin-syrups.svg", active: true },
  { id: "item-7", name: "Chile Mango Syrup", price: 28, category: "Syrup", description: "THC tincture syrup with chile mango flavor.", image: "assets/rosin-syrups.svg", active: true },
  { id: "item-8", name: "Permanent Marker Rosin", price: 50, category: "Concentrate", description: "Small-batch concentrate placeholder.", image: "assets/zodashi.svg", active: false },
  { id: "item-10", name: "Live Resin Cart", price: 35, category: "Carts", description: "Disposable or cartridge option placeholder. Add strain, hardware, and potency details.", image: "assets/zodashi.svg", active: true },
  { id: "item-11", name: "Clone / Seed Inquiry", price: 0, category: "Clones / Seeds", description: "Availability changes often. Add genetics, pack count, or clone notes and have customers inquire directly.", image: "assets/tractor-gas.svg", active: false },
  { id: "item-9", name: "Sutter Buttes Hat", price: 30, category: "Apparel", description: "Black and white trucker hat with mountain logo.", image: "assets/sutter-hat.svg", active: true }
];
const catalogVersion = "sutter-products-v6";

const defaultDesign = {
  name: "Sutter Buttes",
  color: "#193429",
  preset: "fresh"
};
const defaultFrontPage = {
  deliveryArea: "Yuba City / Sutter County",
  heroEyebrow: "Verified member area",
  heroTitle: "Sutter Buttes",
  heroDescription: "Private member catalog access with fulfillment reviewed by the team.",
  heroImages: [
    "https://images.unsplash.com/photo-1603909223429-69bb7101f420?auto=format&fit=crop&w=900&q=80"
  ],
  brandEyebrow: "Est. 2026",
  brandHeadline: "Sutter Buttes Cannabis Co.",
  brandDescription: "Mountain-grown energy, curated drops, local delivery.",
  brandLayout: "split",
  brandPanelStyle: "light",
  brandAccentColor: "#d8ad3f",
  navHomeLabel: "Home",
  navCatalogLabel: "Catalog",
  navMemberLabel: "Member Access",
  navCartLabel: "Cart",
  navOrderLabel: "Track Order",
  homeBrowseButton: "Browse catalog",
  homeMemberButton: "Member Access",
  homeTrackButton: "Track Order",
  homeSearchLabel: "Search the private catalog",
  homeSearchPlaceholder: "Flower, carts, clones, seeds, syrups",
  homeSearchButton: "Search menu",
  featuredDrop: "11PM",
  featuredDescription: "Curated by Sutter Buttes Cannabis Co.",
  flowerNote: "Tractor Gas, Zodashi, Dog Food, 11PM.",
  flowerCategoryButton: "View flower",
  syrupNote: "Mango, pineapple, cucumber, watermelon, chile.",
  syrupCategoryButton: "View syrups",
  apparelNote: "Trucker hats, tees, limited collab pieces.",
  apparelCategoryButton: "View apparel",
  cartBarButton: "Cart / Checkout",
  cartBrowseButton: "Browse catalog",
  cartCheckoutButton: "Continue checkout"
};
const defaultPromo = {
  visible: true,
  eyebrow: "Private drop",
  headline: "Weekend menu update",
  description: "Fresh flower, syrup flavors, and merch drops are live.",
  button: "View catalog",
  shoutouts: [
    { eyebrow: "Limited deal", headline: "Buy 3 Get 1 Free", description: "Flower only through Sunday" },
    { eyebrow: "New cart drop", headline: "Live resin carts", description: "Ask about brand options" }
  ],
  promoImages: [],
  logoImage: "",
  heroImage: ""
};
const orderStatuses = ["Submitted", "Confirmed", "Denied", "Packed", "Out for delivery", "Ready for pickup", "Completed", "Canceled"];
const complianceItems = [
  { key: "contacted", label: "Member contacted" },
  { key: "areaConfirmed", label: "Delivery area confirmed" },
  { key: "cashConfirmed", label: "Cash total confirmed" },
  { key: "idVerified", label: "ID verification planned" },
  { key: "packed", label: "Order packed" },
  { key: "handoff", label: "Driver handoff confirmed" }
];
const defaultAccessCodes = {
  customer: "",
  admin: "ADMIN2026",
  guest: {
    code: "GUEST2026",
    label: "Weekly Guest Code",
    expires: ""
  },
  invites: []
};
const defaultDeliverySettings = {
  minimumOrder: 50,
  minimumOrderFee: 5,
  baseDeliveryFee: 0,
  rushDeliveryFee: 10,
  extendedDeliveryFee: 15,
  taxRate: 0,
  discountLabel: "",
  discountPercent: 0,
  promoCodes: [
    { code: "WELCOME10", type: "percent", value: 10, label: "Welcome deal" },
    { code: "BUTTES5", type: "fixed", value: 5, label: "$5 off" }
  ],
  bundleDeals: [],
  zones: "Yuba City / Sutter County"
};
const defaultBusinessSettings = {
  businessName: "Sutter Buttes",
  businessType: "Private product delivery",
  complianceMode: "cannabis",
  ageGateRequired: true,
  minimumAge: 21,
  idVerificationRequired: true,
  deliveryEnabled: true,
  pickupEnabled: false,
  complianceChecklistEnabled: true,
  memberOnlyMode: true,
  weeklyGuestCodeEnabled: true,
  guestCanViewMenu: true,
  guestCanPlaceFirstOrder: true,
  memberApprovalRequired: true,
  approvedMemberCodesEnabled: true
};
const adminRoleLabels = {
  owner: "Admin",
  manager: "Manager",
  driver: "Driver"
};
const rolePermissions = {
  owner: ["orders", "driverBoard", "assignOrders", "editMenu", "deleteProducts", "promo", "coreDesign", "accessCodes", "team", "backend", "delivery"],
  manager: ["orders", "driverBoard", "assignOrders", "editMenu", "promo", "delivery"],
  driver: ["driverBoard"]
};
const workerBlockedPermissions = ["accessCodes", "team", "deleteProducts", "backend", "coreDesign"];
const lowStockThreshold = 3;
const liveOrderRefreshMs = 10000;
const customerOrderRefreshMs = 15000;

let cart = loadCart();
let activeFilter = "all";
let activeSubcategory = "all";
let activeBrand = "all";
let activePriceRange = "all";
let activeMode = "customer";
let adminCatalogFilters = {
  query: "",
  category: "all",
  subcategory: "all",
  brand: "all",
  status: "all"
};
let orderFilters = {
  query: "",
  status: "all",
  assignee: "all"
};
let catalog = loadCatalog();
let design = loadDesign();
let frontPage = loadFrontPage();
let promo = loadPromo();
let merchantOrders = loadOrders();
let feedbackMessages = loadFeedbackMessages();
let accessCodes = loadAccessCodes();
let deliverySettings = loadDeliverySettings();
let businessSettings = loadBusinessSettings();
let teamMembers = loadTeamMembers();
let memberRecords = loadMemberRecords();
let editingItemId = null;
let editingTeamMemberId = "";
let editingMemberId = "";
let pendingImageData = "";
let pendingImageFile = null;
let pendingLogoData = "";
let pendingLogoFile = null;
let pendingHeroData = "";
let pendingHeroFile = null;
let pendingHeroImagesData = [];
let pendingHeroImageFiles = [];
let pendingPromoImagesData = [];
let pendingPromoImageFiles = [];
let accessLevel = localStorage.getItem("sutterButtesAccessLevel") || "";
let customerAccessType = localStorage.getItem("sutterButtesCustomerAccessType") || "";
let activeMemberId = localStorage.getItem("sutterButtesActiveMemberId") || "";
let appliedPromoCodes = [];
let liveOrderRefreshTimer = null;
let customerOrderRefreshTimer = null;
let lastOrderSignature = "";
let lastFeedbackSignature = "";
let knownOrderStates = loadKnownOrderStates();
let knownFeedbackIds = JSON.parse(localStorage.getItem("sutterButtesKnownFeedbackIds") || "[]");
let customerReceipts = loadCustomerReceipts();
let memberProfile = loadMemberProfile();
let activeCustomerPage = "home";
let activeCustomerTrackedOrderId = "";

const modeButtons = document.querySelectorAll(".mode");
const roleButtons = document.querySelectorAll(".role-button");
const views = {
  customer: document.getElementById("customerView"),
  merchant: document.getElementById("merchantView"),
  driver: document.getElementById("driverView"),
  catalog: document.getElementById("catalogView"),
  design: document.getElementById("designView"),
  frontpage: document.getElementById("frontpageView"),
  promo: document.getElementById("promoView"),
  access: document.getElementById("accessView"),
  team: document.getElementById("teamView"),
  backend: document.getElementById("backendView"),
  settings: document.getElementById("settingsView")
};
let activeRole = "customer";
const merchantList = document.getElementById("merchantList");
const driverOrders = document.getElementById("driverOrders");
const driverStatusNote = document.getElementById("driverStatusNote");
const refreshDriverButton = document.getElementById("refreshDriverButton");
const refreshOrdersButton = document.getElementById("refreshOrdersButton");
const driverAssignedCount = document.getElementById("driverAssignedCount");
const driverConfirmedCount = document.getElementById("driverConfirmedCount");
const driverPackedCount = document.getElementById("driverPackedCount");
const driverOutCount = document.getElementById("driverOutCount");
const basketSummary = document.getElementById("basketSummary");
const basketDetail = document.getElementById("basketDetail");
const searchInput = document.getElementById("searchInput");
const searchRow = document.querySelector(".search-row");
const basketBar = document.querySelector(".basket-bar");
const customerPageButtons = document.querySelectorAll("[data-customer-nav]");
const customerPages = document.querySelectorAll("[data-customer-page]");
const homeSearchForm = document.getElementById("homeSearchForm");
const homeSearchInput = document.getElementById("homeSearchInput");
const homeMemberAccessButton = document.getElementById("homeMemberAccessButton");
const homeTrackOrderButton = document.getElementById("homeTrackOrderButton");
const homeCategoryButtons = document.querySelectorAll("[data-home-category]");
const catalogList = document.getElementById("catalogList");
const catalogForm = document.getElementById("catalogForm");
const adminCatalogSearch = document.getElementById("adminCatalogSearch");
const adminCategoryFilter = document.getElementById("adminCategoryFilter");
const adminSubcategoryFilter = document.getElementById("adminSubcategoryFilter");
const adminBrandFilter = document.getElementById("adminBrandFilter");
const adminStatusFilter = document.getElementById("adminStatusFilter");
const clearCatalogFilters = document.getElementById("clearCatalogFilters");
const inventoryLiveCount = document.getElementById("inventoryLiveCount");
const inventoryLowCount = document.getElementById("inventoryLowCount");
const inventorySoldOutCount = document.getElementById("inventorySoldOutCount");
const inventoryPausedCount = document.getElementById("inventoryPausedCount");
const inventoryActionNote = document.getElementById("inventoryActionNote");
const itemNameInput = document.getElementById("itemName");
const itemPriceInput = document.getElementById("itemPrice");
const itemVariantsInput = document.getElementById("itemVariants");
const itemDescriptionInput = document.getElementById("itemDescription");
const itemCategoryInput = document.getElementById("itemCategory");
const itemSubcategoryInput = document.getElementById("itemSubcategory");
const itemBrandInput = document.getElementById("itemBrand");
const categorySuggestions = document.getElementById("categorySuggestions");
const categoryFilters = document.getElementById("categoryFilters");
const subcategoryFilters = document.getElementById("subcategoryFilters");
const brandFilters = document.getElementById("brandFilters");
const priceRangeFilter = document.getElementById("priceRangeFilter");
const clearBrowseFilters = document.getElementById("clearBrowseFilters");
const browseTitle = document.getElementById("browseTitle");
const itemStockInput = document.getElementById("itemStock");
const itemLimitInput = document.getElementById("itemLimit");
const itemTagsInput = document.getElementById("itemTags");
const itemImageUrlInput = document.getElementById("itemImageUrl");
const itemImageFileInput = document.getElementById("itemImageFile");
const catalogSubmitButton = document.getElementById("catalogSubmitButton");
const cancelEditButton = document.getElementById("cancelEditButton");
const designForm = document.getElementById("designForm");
const brandNameInput = document.getElementById("brandNameInput");
const brandColorInput = document.getElementById("brandColorInput");
const stylePresetInput = document.getElementById("stylePresetInput");
const frontPageForm = document.getElementById("frontPageForm");
const frontPageInputs = {
  deliveryArea: document.getElementById("deliveryAreaInput"),
  heroEyebrow: document.getElementById("heroEyebrowInput"),
  heroTitle: document.getElementById("heroTitleInput"),
  heroDescription: document.getElementById("heroDescriptionInput"),
  heroImages: document.getElementById("heroImagesInput"),
  heroImagesFile: document.getElementById("heroImagesFileInput"),
  layoutColor: document.getElementById("layoutBrandColorInput"),
  layoutPreset: document.getElementById("layoutStylePresetInput"),
  brandEyebrow: document.getElementById("brandEyebrowInput"),
  brandHeadline: document.getElementById("brandHeadlineInput"),
  brandDescription: document.getElementById("brandDescriptionInput"),
  brandLayout: document.getElementById("brandLayoutInput"),
  brandPanelStyle: document.getElementById("brandPanelStyleInput"),
  brandAccentColor: document.getElementById("brandAccentColorInput"),
  navHomeLabel: document.getElementById("navHomeLabelInput"),
  navCatalogLabel: document.getElementById("navCatalogLabelInput"),
  navMemberLabel: document.getElementById("navMemberLabelInput"),
  navCartLabel: document.getElementById("navCartLabelInput"),
  navOrderLabel: document.getElementById("navOrderLabelInput"),
  homeBrowseButton: document.getElementById("homeBrowseButtonInput"),
  homeMemberButton: document.getElementById("homeMemberButtonInput"),
  homeTrackButton: document.getElementById("homeTrackButtonInput"),
  homeSearchLabel: document.getElementById("homeSearchLabelInput"),
  homeSearchPlaceholder: document.getElementById("homeSearchPlaceholderInput"),
  homeSearchButton: document.getElementById("homeSearchButtonInput"),
  featuredDrop: document.getElementById("featuredDropInput"),
  featuredDescription: document.getElementById("featuredDescriptionInput"),
  flowerNote: document.getElementById("flowerNoteInput"),
  flowerCategoryButton: document.getElementById("flowerCategoryButtonInput"),
  syrupNote: document.getElementById("syrupNoteInput"),
  syrupCategoryButton: document.getElementById("syrupCategoryButtonInput"),
  apparelNote: document.getElementById("apparelNoteInput"),
  apparelCategoryButton: document.getElementById("apparelCategoryButtonInput"),
  cartBarButton: document.getElementById("cartBarButtonInput"),
  cartBrowseButton: document.getElementById("cartBrowseButtonInput"),
  cartCheckoutButton: document.getElementById("cartCheckoutButtonInput")
};
const accessForm = document.getElementById("accessForm");
const accessCodeInput = document.getElementById("accessCodeInput");
const accessError = document.getElementById("accessError");
const adminAlert = document.getElementById("adminAlert");
const adminAlertTitle = document.getElementById("adminAlertTitle");
const adminAlertBody = document.getElementById("adminAlertBody");
const orderSearchInput = document.getElementById("orderSearchInput");
const orderStatusFilter = document.getElementById("orderStatusFilter");
const orderStatusTabs = document.querySelectorAll("[data-order-status-tab]");
const orderAssigneeFilter = document.getElementById("orderAssigneeFilter");
const clearOrderFilters = document.getElementById("clearOrderFilters");
const pendingOrderCount = document.getElementById("pendingOrderCount");
const activeDeliveryCount = document.getElementById("activeDeliveryCount");
const newFeedbackCount = document.getElementById("newFeedbackCount");
const customerStatusPanel = document.getElementById("customerStatusPanel");
const customerStatusTitle = document.getElementById("customerStatusTitle");
const customerStatusBody = document.getElementById("customerStatusBody");
const customerStatusTimeline = document.getElementById("customerStatusTimeline");
const customerStatusMeta = document.getElementById("customerStatusMeta");
const customerActivityFeed = document.getElementById("customerActivityFeed");
const customerLiveStatus = document.getElementById("customerLiveStatus");
const refreshCustomerOrderButton = document.getElementById("refreshCustomerOrderButton");
const memberEmailForm = document.getElementById("memberEmailForm");
const memberNameInput = document.getElementById("memberNameInput");
const memberPhoneInput = document.getElementById("memberPhoneInput");
const memberEmailInput = document.getElementById("memberEmailInput");
const memberEmailStatus = document.getElementById("memberEmailStatus");
const memberConnectionPill = document.getElementById("memberConnectionPill");
const memberRequestForm = document.getElementById("memberRequestForm");
const requestMemberNameInput = document.getElementById("requestMemberNameInput");
const requestMemberPhoneInput = document.getElementById("requestMemberPhoneInput");
const requestMemberEmailInput = document.getElementById("requestMemberEmailInput");
const requestMemberContactInput = document.getElementById("requestMemberContactInput");
const requestMemberNotesInput = document.getElementById("requestMemberNotesInput");
const memberRequestStatus = document.getElementById("memberRequestStatus");
const orderLookupForm = document.getElementById("orderLookupForm");
const lookupOrderInput = document.getElementById("lookupOrderInput");
const lookupPhoneInput = document.getElementById("lookupPhoneInput");
const lookupStatus = document.getElementById("lookupStatus");
const customerReceiptList = document.getElementById("customerReceiptList");
const feedbackForm = document.getElementById("feedbackForm");
const feedbackNameInput = document.getElementById("feedbackNameInput");
const feedbackPhoneInput = document.getElementById("feedbackPhoneInput");
const feedbackMessageInput = document.getElementById("feedbackMessageInput");
const feedbackStatus = document.getElementById("feedbackStatus");
const feedbackInbox = document.getElementById("feedbackInbox");
const refreshFeedbackButton = document.getElementById("refreshFeedbackButton");
const checkoutPanel = document.getElementById("checkoutPanel");
const checkoutForm = document.getElementById("checkoutForm");
const cartPageLines = document.getElementById("cartPageLines");
const cartPageTotals = document.getElementById("cartPageTotals");
const cartPageBrowseButton = document.getElementById("cartPageBrowseButton");
const cartPageCheckoutButton = document.getElementById("cartPageCheckoutButton");
const confirmationPanel = document.getElementById("confirmationPanel");
const confirmationOrderNumber = document.getElementById("confirmationOrderNumber");
const confirmationMessage = document.getElementById("confirmationMessage");
const confirmationTotal = document.getElementById("confirmationTotal");
const confirmationDetails = document.getElementById("confirmationDetails");
const confirmationItems = document.getElementById("confirmationItems");
const trackReceiptButton = document.getElementById("trackReceiptButton");
const closeConfirmationButton = document.getElementById("closeConfirmationButton");
const feeNote = document.getElementById("feeNote");
const memberCheckoutSummary = document.getElementById("memberCheckoutSummary");
const memberCheckoutName = document.getElementById("memberCheckoutName");
const memberCheckoutPhone = document.getElementById("memberCheckoutPhone");
const memberCheckoutEmail = document.getElementById("memberCheckoutEmail");
const customerNameField = document.getElementById("customerNameField");
const customerNameInput = document.getElementById("customerName");
const customerPhoneField = document.getElementById("customerPhoneField");
const customerPhoneInput = document.getElementById("customerPhone");
const customerEmailField = document.getElementById("customerEmailField");
const customerEmailInput = document.getElementById("customerEmail");
const rememberMemberEmailField = document.getElementById("rememberMemberEmailField");
const rememberMemberEmailInput = document.getElementById("rememberMemberEmail");
const customerContactMethodInput = document.getElementById("customerContactMethod");
const customerAddressInput = document.getElementById("customerAddress");
const deliveryOptionInput = document.getElementById("deliveryOption");
const deliveryInstructionsInput = document.getElementById("deliveryInstructions");
const promoForm = document.getElementById("promoForm");
const accessCodesForm = document.getElementById("accessCodesForm");
const guestCodeInput = document.getElementById("guestCodeInput");
const guestCodeLabelInput = document.getElementById("guestCodeLabelInput");
const guestCodeExpiresInput = document.getElementById("guestCodeExpiresInput");
const customerCodeInput = document.getElementById("customerCodeInput");
const adminCodeInput = document.getElementById("adminCodeInput");
const inviteCodesInput = document.getElementById("inviteCodesInput");
const customerCodeSummary = document.getElementById("customerCodeSummary");
const guestCodeSummary = document.getElementById("guestCodeSummary");
const memberCodeCount = document.getElementById("memberCodeCount");
const adminCodeSummary = document.getElementById("adminCodeSummary");
const inviteCodeCount = document.getElementById("inviteCodeCount");
const workerCodeCount = document.getElementById("workerCodeCount");
const accessCodeHelp = document.getElementById("accessCodeHelp");
const deliverySettingsForm = document.getElementById("deliverySettingsForm");
const businessNameSettingInput = document.getElementById("businessNameSettingInput");
const businessTypeSettingInput = document.getElementById("businessTypeSettingInput");
const complianceModeInput = document.getElementById("complianceModeInput");
const minimumAgeInput = document.getElementById("minimumAgeInput");
const ageGateRequiredInput = document.getElementById("ageGateRequiredInput");
const idVerificationRequiredInput = document.getElementById("idVerificationRequiredInput");
const deliveryEnabledInput = document.getElementById("deliveryEnabledInput");
const pickupEnabledInput = document.getElementById("pickupEnabledInput");
const complianceChecklistEnabledInput = document.getElementById("complianceChecklistEnabledInput");
const memberOnlyModeInput = document.getElementById("memberOnlyModeInput");
const weeklyGuestCodeEnabledInput = document.getElementById("weeklyGuestCodeEnabledInput");
const guestCanViewMenuInput = document.getElementById("guestCanViewMenuInput");
const guestCanPlaceFirstOrderInput = document.getElementById("guestCanPlaceFirstOrderInput");
const memberApprovalRequiredInput = document.getElementById("memberApprovalRequiredInput");
const approvedMemberCodesEnabledInput = document.getElementById("approvedMemberCodesEnabledInput");
const minimumOrderInput = document.getElementById("minimumOrderInput");
const minimumOrderFeeInput = document.getElementById("minimumOrderFeeInput");
const baseDeliveryFeeInput = document.getElementById("baseDeliveryFeeInput");
const rushDeliveryFeeInput = document.getElementById("rushDeliveryFeeInput");
const extendedDeliveryFeeInput = document.getElementById("extendedDeliveryFeeInput");
const taxRateInput = document.getElementById("taxRateInput");
const discountLabelInput = document.getElementById("discountLabelInput");
const discountPercentInput = document.getElementById("discountPercentInput");
const promoCodesInput = document.getElementById("promoCodesInput");
const bundleDealsInput = document.getElementById("bundleDealsInput");
const deliveryZonesInput = document.getElementById("deliveryZonesInput");
const cartLines = document.getElementById("cartLines");
const cartTotals = document.getElementById("cartTotals");
const promoCodeInput = document.getElementById("promoCodeInput");
const applyPromoCodeButton = document.getElementById("applyPromoCodeButton");
const promoCodeMessage = document.getElementById("promoCodeMessage");
const backendLoginForm = document.getElementById("backendLoginForm");
const backendEmailInput = document.getElementById("backendEmailInput");
const backendPasswordInput = document.getElementById("backendPasswordInput");
const backendStatus = document.getElementById("backendStatus");
const syncFromBackendButton = document.getElementById("syncFromBackendButton");
const pushToBackendButton = document.getElementById("pushToBackendButton");
const backendSignOutButton = document.getElementById("backendSignOutButton");
const liveOrdersStatus = document.getElementById("liveOrdersStatus");
const roleSwitch = document.getElementById("roleSwitch");
const modeSwitch = document.getElementById("modeSwitch");
const accountSwitchButton = document.getElementById("accountSwitchButton");
const staffSyncPanel = document.getElementById("staffSyncPanel");
const staffSyncStatus = document.getElementById("staffSyncStatus");
const staffSyncForm = document.getElementById("staffSyncForm");
const staffSyncEmailInput = document.getElementById("staffSyncEmailInput");
const staffSyncPasswordInput = document.getElementById("staffSyncPasswordInput");
const staffSyncSignOutButton = document.getElementById("staffSyncSignOutButton");
const currentAdminProfile = document.getElementById("currentAdminProfile");
const designSyncStatus = document.getElementById("designSyncStatus");
const deliverySyncStatus = document.getElementById("deliverySyncStatus");
const teamMemberForm = document.getElementById("teamMemberForm");
const teamMemberNameInput = document.getElementById("teamMemberNameInput");
const teamMemberTitleInput = document.getElementById("teamMemberTitleInput");
const teamMemberEmailInput = document.getElementById("teamMemberEmailInput");
const teamMemberPasscodeInput = document.getElementById("teamMemberPasscodeInput");
const teamMemberRoleInput = document.getElementById("teamMemberRoleInput");
const teamMemberActiveInput = document.getElementById("teamMemberActiveInput");
const teamMemberList = document.getElementById("teamMemberList");
const teamPermissionInputs = document.querySelectorAll("[data-team-permission]");
const teamMemberSubmitButton = document.getElementById("teamMemberSubmitButton");
const cancelTeamEditButton = document.getElementById("cancelTeamEditButton");
const refreshMembersButton = document.getElementById("refreshMembersButton");
const memberAdminForm = document.getElementById("memberAdminForm");
const editingMemberIdInput = document.getElementById("editingMemberIdInput");
const adminMemberNameInput = document.getElementById("adminMemberNameInput");
const adminMemberPhoneInput = document.getElementById("adminMemberPhoneInput");
const adminMemberEmailInput = document.getElementById("adminMemberEmailInput");
const adminMemberCodeInput = document.getElementById("adminMemberCodeInput");
const adminMemberStatusInput = document.getElementById("adminMemberStatusInput");
const adminMemberNotesInput = document.getElementById("adminMemberNotesInput");
const adminMemberSubmitButton = document.getElementById("adminMemberSubmitButton");
const cancelMemberEditButton = document.getElementById("cancelMemberEditButton");
const memberAdminList = document.getElementById("memberAdminList");
const promoInputs = {
  visible: document.getElementById("promoVisibleInput"),
  eyebrow: document.getElementById("promoEyebrowInput"),
  headline: document.getElementById("promoHeadlineInput"),
  description: document.getElementById("promoDescriptionInput"),
  button: document.getElementById("promoButtonInput"),
  shoutouts: document.getElementById("promoShoutoutsInput"),
  promoImages: document.getElementById("promoImagesInput"),
  promoImagesFile: document.getElementById("promoImagesFileInput"),
  logoImage: document.getElementById("logoImageUrlInput"),
  logoFile: document.getElementById("logoImageFileInput"),
  heroImage: document.getElementById("heroImageUrlInput"),
  heroFile: document.getElementById("heroImageFileInput")
};

function updateCustomerPageVisibility() {
  customerPages.forEach((page) => {
    page.classList.toggle("active", page.dataset.customerPage === activeCustomerPage);
  });
  customerPageButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.customerNav === activeCustomerPage);
  });
  if (searchRow) searchRow.style.display = activeMode === "customer" && activeCustomerPage === "catalog" ? "block" : "none";
  if (basketBar) basketBar.style.display = activeMode === "customer" && activeCustomerPage === "catalog" ? "flex" : "none";
  if (activeCustomerPage === "catalog") {
    renderCategoryControls();
    renderBrowseControls();
    renderMerchants();
  }
  if (activeCustomerPage === "cart") {
    renderCartPage();
  }
  if (activeCustomerPage === "order") {
    if (!getCustomerTrackedOrder() && lookupStatus) {
      lookupStatus.textContent = "Only the matching order will show here.";
    }
    if (!getCustomerTrackedOrder()) {
      if (lookupOrderInput) lookupOrderInput.value = "";
      if (lookupPhoneInput) lookupPhoneInput.value = "";
    }
    renderCustomerOrderStatus();
  }
  if (activeCustomerPage === "member") {
    renderCustomerReceipts();
    refreshMemberReceiptsFromBackend(true);
  }
}

function setCustomerPage(page, options = {}) {
  const nextPage = ["home", "catalog", "member", "cart", "order"].includes(page) ? page : "home";
  if (confirmationPanel && !confirmationPanel.hidden && !options.keepConfirmation) {
    confirmationPanel.hidden = true;
    clearCustomerTrackedOrder();
  }
  if (accessLevel === "customer" && activeCustomerPage === "order" && nextPage !== "order") {
    clearCustomerTrackedOrder();
  }
  activeCustomerPage = nextPage;
  if (activeMode !== "customer") {
    setMode("customer");
  } else {
    updateCustomerPageVisibility();
  }
  if (options.scroll !== false) {
    requestAnimationFrame(() => {
      views.customer?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }
}

function setMode(mode) {
  const previousMode = activeMode;
  if (!canOpenMode(mode)) {
    mode = activeRole === "customer"
      ? "customer"
      : getFirstStaffMode();
  }

  if (previousMode === "customer" && mode !== "customer") {
    if (confirmationPanel) confirmationPanel.hidden = true;
    clearCustomerTrackedOrder();
  }

  activeMode = mode;

  modeButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.mode === mode);
  });

  Object.entries(views).forEach(([key, view]) => {
    view.classList.toggle("active", key === mode);
  });

  const isCustomer = mode === "customer";
  if (isCustomer) {
    updateCustomerPageVisibility();
  } else if (searchRow) {
    searchRow.style.display = "none";
  }
  basketBar.style.display = isCustomer && activeCustomerPage === "catalog" ? "flex" : "none";
  updateStaffSyncPanel();
  runModeAutoSync(mode);
}

function currentAdminEmail() {
  return window.SutterBackend?.getCurrentUser?.()?.email?.toLowerCase() || "";
}

function makeWorkerId(member = {}) {
  return member.id || member.email || `worker-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`;
}

function normalizeWorkerCode(code = "") {
  return String(code).trim().toUpperCase();
}

function normalizeAccessCode(code = "") {
  return String(code).trim().toUpperCase().replace(/\s+/g, "");
}

function makeMemberId(member = {}) {
  return member.memberId || member.member_id || member.id || `member-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

function generateShortCode(prefix = "MBR") {
  const alphabet = "23456789ABCDEFGHJKLMNPQRSTUVWXYZ";
  const values = new Uint32Array(5);
  if (window.crypto?.getRandomValues) {
    window.crypto.getRandomValues(values);
  } else {
    values.forEach((_, index) => {
      values[index] = Math.floor(Math.random() * alphabet.length);
    });
  }
  const token = [...values].map((value) => alphabet[value % alphabet.length]).join("");
  return `${prefix}-${token}`;
}

function normalizeMemberRecord(member = {}) {
  const status = ["pending", "approved", "denied", "disabled"].includes(member.status)
    ? member.status
    : "pending";
  return {
    id: makeMemberId(member),
    name: member.name || member.member_name || "",
    code: normalizeAccessCode(member.code || member.member_code || ""),
    phone: member.phone || "",
    email: normalizeEmail(member.email || ""),
    status,
    notes: member.notes || "",
    contactMethod: member.contactMethod || member.contact_method || "Text",
    createdAt: member.createdAt || member.created_at || new Date().toISOString(),
    approvedAt: member.approvedAt || member.approved_at || "",
    lastOrderAt: member.lastOrderAt || member.last_order_at || ""
  };
}

function getActiveMember() {
  if (!activeMemberId) return null;
  return memberRecords.find((member) => member.id === activeMemberId || member.code === activeMemberId) || null;
}

function getMemberIdentifier(member = {}) {
  if (!member) return "";
  return member.email || member.id || "";
}

function getMemberLabel(identifier = "") {
  const member = teamMembers.find((item) => getMemberIdentifier(item) === identifier || item.id === identifier || item.email === identifier);
  return member ? `${member.name}${member.title ? ` - ${member.title}` : ""}` : identifier;
}

function getRoleDefaultPermissions(role) {
  return [...(rolePermissions[role] || rolePermissions.driver)];
}

function getWorkerDefaultPermissions(role) {
  return getRoleDefaultPermissions(role).filter((permission) => !workerBlockedPermissions.includes(permission));
}

function normalizePermissions(permissions = [], role = "driver") {
  const normalized = new Set();
  permissions.forEach((permission) => {
    if (permission === "design") {
      normalized.add("promo");
      if (role === "owner") normalized.add("coreDesign");
      return;
    }
    normalized.add(permission);
  });
  return [...normalized].filter((permission) => rolePermissions.owner.includes(permission));
}

function canMember(member, permission) {
  const permissions = Array.isArray(member?.permissions) && member.permissions.length
    ? member.permissions
    : getWorkerDefaultPermissions(member?.role || "driver");
  return permissions.includes(permission);
}

function normalizeTeamMember(member) {
  const role = adminRoleLabels[member.role] ? member.role : "driver";
  const permissions = Array.isArray(member.permissions) && member.permissions.length
    ? normalizePermissions(member.permissions, role)
    : getWorkerDefaultPermissions(role);
  return {
    id: makeWorkerId(member),
    name: member.name || member.email || "Team member",
    title: member.title || adminRoleLabels[role],
    email: (member.email || "").toLowerCase(),
    passcode: normalizeWorkerCode(member.passcode || member.code || ""),
    role,
    permissions,
    active: member.active !== false
  };
}

function currentAdminMember() {
  const workerId = localStorage.getItem("sutterButtesWorkerId") || "";
  if (accessLevel === "worker" && workerId) {
    return teamMembers.find((item) => item.id === workerId && item.active) || null;
  }

  const email = currentAdminEmail();
  if (!email) {
    return accessLevel === "admin"
      ? { name: "Local admin", email: "", role: "owner", active: true }
      : null;
  }

  const member = teamMembers.find((item) => item.email === email && item.active);
  if (member) return member;
  if (!teamMembers.length) return { name: email, email, role: "owner", active: true };
  return accessLevel === "admin"
    ? { name: email, email, role: "owner", active: true }
    : { name: email, email, role: "driver", active: true };
}

function currentAdminRole() {
  return currentAdminMember()?.role || "driver";
}

function can(permission) {
  if ((accessLevel === "worker" || activeRole === "worker") && workerBlockedPermissions.includes(permission)) return false;
  const member = currentAdminMember();
  if (accessLevel === "worker" && !member) return false;
  if (member?.permissions) return canMember(member, permission);
  return getRoleDefaultPermissions(currentAdminRole()).includes(permission);
}

function modePermission(mode) {
  return {
    merchant: "orders",
    driver: "driverBoard",
    catalog: "editMenu",
    frontpage: "coreDesign",
    design: "coreDesign",
    promo: "promo",
    access: "accessCodes",
    team: "team",
    settings: "delivery",
    backend: "backend"
  }[mode];
}

function getFirstStaffMode() {
  const preferred = currentAdminRole() === "driver"
    ? ["driver", "merchant", "catalog", "settings"]
    : ["merchant", "driver", "catalog", "promo", "settings", "frontpage", "backend"];
  return preferred.find((mode) => canOpenMode(mode)) || "driver";
}

function canOpenMode(mode) {
  if (mode === "customer") return true;
  if (!["admin", "worker"].includes(accessLevel)) return false;
  if (mode === "frontpage") return can("coreDesign") || can("promo");
  return can(modePermission(mode));
}

function updateAdminPermissions() {
  const role = currentAdminRole();
  const member = currentAdminMember();
  const isAdminSession = accessLevel === "admin";
  const isWorkerSession = accessLevel === "worker";
  const isStaffSession = isAdminSession || isWorkerSession;
  document.body.classList.toggle("admin-session", isAdminSession);
  document.body.classList.toggle("worker-session", isWorkerSession);
  document.body.classList.toggle("customer-session", accessLevel === "customer");
  if (modeSwitch) modeSwitch.hidden = !isStaffSession;
  if (roleSwitch) roleSwitch.hidden = accessLevel !== "admin";
  if (currentAdminProfile) {
    currentAdminProfile.textContent = member
      ? `${isWorkerSession ? "Worker passcode" : "Signed in"} as ${member.name}${member.title ? ` - ${member.title}` : ""} (${adminRoleLabels[role]}).`
      : "Sign in to Supabase to identify this admin.";
  }

  modeButtons.forEach((button) => {
    const mode = button.dataset.mode;
    const allowed = canOpenMode(mode);
    if (button.dataset.roleTab === "admin") {
      button.hidden = !isStaffSession || activeRole === "customer" || !allowed;
      button.disabled = !allowed;
    }
  });

  document.querySelectorAll("[data-owner-only]").forEach((element) => {
    element.hidden = !can(element.dataset.ownerOnly);
    element.disabled = !can(element.dataset.ownerOnly);
  });

  document.querySelectorAll("[data-permission-section]").forEach((element) => {
    const allowed = can(element.dataset.permissionSection);
    element.hidden = !allowed;
    if ("disabled" in element) element.disabled = !allowed;
    element.querySelectorAll?.("input, textarea, select, button").forEach((control) => {
      control.disabled = !allowed;
    });
  });
  updateStaffSyncPanel();
}

function setRole(role) {
  if (role === "admin" && accessLevel !== "admin") {
    accessError.textContent = "Admin code required for admin view.";
    role = "customer";
  }

  if (role === "worker" && !["admin", "worker"].includes(accessLevel)) {
    accessError.textContent = "Worker code required for worker view.";
    role = "customer";
  }

  if (accessLevel === "worker") {
    role = "worker";
  }

  if (accessLevel === "customer") {
    role = "customer";
    stopLiveOrderRefresh();
  }

  if (accessLevel === "admin" && !backendReady() && role === "admin") {
    setBackendStatus("Supabase is configured. Sign in for shared admin sync.");
  }

  if (accessLevel !== "admin" && role === "admin") {
    return;
  }

  activeRole = role;
  roleButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.role === role);
  });

  modeButtons.forEach((button) => {
    const show = role === "customer"
      ? button.dataset.roleTab === "customer"
      : button.dataset.roleTab === "admin";
    button.hidden = !show || (role !== "customer" && !canOpenMode(button.dataset.mode));
    button.classList.toggle("active", false);
  });

  const firstMode = role === "customer" ? "customer" : getFirstStaffMode();
  updateAdminPermissions();
  setMode(firstMode);
}

function updateRoleAccess() {
  const customerButton = document.querySelector('[data-role="customer"]');
  const workerButton = document.querySelector('[data-role="worker"]');
  const adminButton = document.querySelector('[data-role="admin"]');
  if (customerButton) customerButton.hidden = accessLevel === "worker";
  if (workerButton) {
    workerButton.hidden = !["admin", "worker"].includes(accessLevel);
    workerButton.disabled = !["admin", "worker"].includes(accessLevel);
    workerButton.title = ["admin", "worker"].includes(accessLevel) ? "Open worker tools" : "Worker code required";
  }
  adminButton.hidden = accessLevel !== "admin";
  adminButton.disabled = accessLevel !== "admin";
  adminButton.title = accessLevel === "admin" ? "Open admin tools" : "Admin code required";
  if (roleSwitch) roleSwitch.hidden = accessLevel !== "admin";
  if (modeSwitch) modeSwitch.hidden = !["admin", "worker"].includes(accessLevel);
  updateAdminPermissions();
}

function loadCatalog() {
  const savedVersion = localStorage.getItem("sutterButtesCatalogVersion");
  const saved = localStorage.getItem("sutterButtesCatalog");
  let source = saved ? JSON.parse(saved) : [...defaultCatalog];
  if (saved && savedVersion !== catalogVersion) {
    const savedIds = new Set(source.map((item) => item.id));
    source = [
      ...source,
      ...defaultCatalog.filter((item) => !savedIds.has(item.id))
    ];
    localStorage.setItem("sutterButtesCatalogVersion", catalogVersion);
  }
  return source.map((item) => ({
    stock: 10,
    limit: 0,
    tags: "",
    subcategory: "",
    brand: "",
    ...item,
    variants: normalizeVariants(item)
  }));
}

function saveCatalog() {
  localStorage.setItem("sutterButtesCatalogVersion", catalogVersion);
  localStorage.setItem("sutterButtesCatalog", JSON.stringify(catalog));
  saveCatalogToBackend();
}

function normalizeVariants(item) {
  if (Array.isArray(item.variants) && item.variants.length) {
    return item.variants.map((variant) => ({
      label: variant.label || "Option",
      price: Number(variant.price || item.price || 0)
    })).filter((variant) => variant.label && !Number.isNaN(variant.price));
  }

  if (item.category === "Flower") {
    return defaultFlowerVariants.map((variant) => ({ ...variant }));
  }

  return [];
}

function parseVariants(text) {
  return text.split("\n").map((line) => {
    const [label = "", price = ""] = line.split("|").map((part) => part.trim());
    return { label, price: Number(price) };
  }).filter((variant) => variant.label && !Number.isNaN(variant.price));
}

function formatVariants(variants = []) {
  return variants.map((variant) => `${variant.label} | ${variant.price}`).join("\n");
}

function getCategoryKey(category = "") {
  return category.trim().toLowerCase();
}

function getMenuCategories() {
  const seen = new Map();
  catalog.forEach((item) => {
    if (!item.category) return;
    const key = getCategoryKey(item.category);
    if (!seen.has(key)) seen.set(key, item.category);
  });
  return [...seen.entries()].map(([key, label]) => ({ key, label }));
}

function getFilteredBaseProducts() {
  return catalog.filter((product) => product.active && (activeFilter === "all" || getCategoryKey(product.category) === activeFilter));
}

function getUniqueFieldOptions(products, field) {
  const seen = new Map();
  products.forEach((product) => {
    const value = (product[field] || "").trim();
    if (!value) return;
    const key = value.toLowerCase();
    if (!seen.has(key)) seen.set(key, value);
  });
  return [...seen.entries()].map(([key, label]) => ({ key, label }));
}

function sanitizePhoneHref(phone = "") {
  return String(phone).replace(/[^\d+]/g, "");
}

function fillSelectOptions(select, options, allLabel, activeValue) {
  select.innerHTML = `
    <option value="all">${escapeHtml(allLabel)}</option>
    ${options.map((option) => `<option value="${escapeHtml(option.key)}">${escapeHtml(option.label)}</option>`).join("")}
  `;
  select.value = options.some((option) => option.key === activeValue) ? activeValue : "all";
}

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatOrderTime(value) {
  if (!value) return "Time unavailable";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "Time unavailable";
  return date.toLocaleString([], { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" });
}

function getOrderTimestamp(order = {}) {
  return order.updatedAt || order.createdAt || order.activity?.[order.activity.length - 1]?.at || "";
}

function getCustomerStatusLabel(status = "Submitted") {
  return {
    Submitted: "Order received",
    Confirmed: "Order confirmed",
    Packed: "Preparing order",
    "Out for delivery": "Out for delivery",
    "Ready for pickup": "Ready for pickup",
    Completed: "Completed",
    Denied: "Denied",
    Canceled: "Canceled"
  }[status] || "Order received";
}

function getCustomerVisibleMessage(order = {}) {
  return String(
    order.customerMessage ||
    order.customerVisibleMessage ||
    order.deniedReasonCustomer ||
    ""
  ).trim();
}

function getFulfillmentMessage(order = {}) {
  const windowText = order.deliveryWindow ? ` Expected window: ${order.deliveryWindow}.` : "";
  const customerMessage = getCustomerVisibleMessage(order);
  const baseMessage = {
    Submitted: "Your order request was received and is pending review.",
    Confirmed: `Your order was confirmed and is queued for fulfillment.${windowText}`,
    Packed: `Your order is being prepared.${windowText}`,
    "Out for delivery": `Your order is out for delivery.${windowText}`,
    "Ready for pickup": `Your order is ready for pickup.${windowText}`,
    Completed: "Your order is complete.",
    Denied: "This order request was denied. Please contact the team if you have questions.",
    Canceled: "This order request was canceled. Please contact the team if you have questions."
  }[order.status] || "Your order request was received.";
  return customerMessage ? `${baseMessage} ${customerMessage}` : baseMessage;
}

function getAdminStatusGroup(status = "") {
  if (status === "Submitted") return "new";
  if (["Confirmed", "Packed"].includes(status)) return "active";
  if (["Out for delivery", "Ready for pickup"].includes(status)) return "out";
  if (status === "Completed") return "completed";
  if (["Denied", "Canceled"].includes(status)) return "canceled";
  return "active";
}

function getOrderItemSummary(order = {}) {
  const items = order.items || [];
  if (!items.length) return "No item details";
  return items.length <= 2 ? items.join(", ") : `${items.slice(0, 2).join(", ")} + ${items.length - 2} more`;
}

function getOrderLocationSummary(order = {}) {
  const value = order.address || "";
  return value.split(",").slice(-2).join(", ").trim() || "Address on file";
}

function getNextOrderAction(order = {}) {
  return {
    Submitted: { label: "Confirm order", status: "Confirmed", style: "primary-button" },
    Confirmed: { label: "Mark preparing", status: "Packed", style: "primary-button" },
    Packed: {
      label: businessSettings.pickupEnabled && !businessSettings.deliveryEnabled ? "Mark ready for pickup" : "Mark out for delivery",
      status: businessSettings.pickupEnabled && !businessSettings.deliveryEnabled ? "Ready for pickup" : "Out for delivery",
      style: "primary-button"
    },
    "Out for delivery": { label: "Mark completed", status: "Completed", style: "primary-button" },
    "Ready for pickup": { label: "Mark completed", status: "Completed", style: "primary-button" }
  }[order.status] || null;
}

function getComplianceItems() {
  return complianceItems
    .filter((item) => item.key !== "idVerified" || businessSettings.idVerificationRequired)
    .map((item) => item.key === "idVerified"
      ? { ...item, label: `${businessSettings.minimumAge}+ ID verification planned` }
      : item);
}

function getProductLowPrice(product) {
  const variants = normalizeVariants(product);
  if (variants.length) return Math.min(...variants.map((variant) => Number(variant.price || product.price)));
  return Number(product.price || 0);
}

function matchesPriceRange(product) {
  const price = getProductLowPrice(product);
  if (activePriceRange === "0-50") return price < 50;
  if (activePriceRange === "50-100") return price >= 50 && price <= 100;
  if (activePriceRange === "100-200") return price > 100 && price <= 200;
  if (activePriceRange === "200+") return price > 200;
  return true;
}

function renderChipGroup(target, options, activeValue, allLabel, onSelect) {
  target.innerHTML = `
    <button class="filter-chip ${activeValue === "all" ? "active" : ""}" type="button" data-chip="all">${escapeHtml(allLabel)}</button>
    ${options.map((option) => `
      <button class="filter-chip ${activeValue === option.key ? "active" : ""}" type="button" data-chip="${escapeHtml(option.key)}">${escapeHtml(option.label)}</button>
    `).join("")}
  `;

  target.querySelectorAll("[data-chip]").forEach((button) => {
    button.addEventListener("click", () => onSelect(button.dataset.chip));
  });
}

function renderBrowseControls() {
  const baseProducts = getFilteredBaseProducts();
  const subcategories = getUniqueFieldOptions(baseProducts, "subcategory");
  const brands = getUniqueFieldOptions(baseProducts, "brand");

  if (activeSubcategory !== "all" && !subcategories.some((option) => option.key === activeSubcategory)) activeSubcategory = "all";
  if (activeBrand !== "all" && !brands.some((option) => option.key === activeBrand)) activeBrand = "all";

  const categoryLabel = activeFilter === "all"
    ? "All products"
    : getMenuCategories().find((category) => category.key === activeFilter)?.label || "Products";
  browseTitle.textContent = categoryLabel;

  renderChipGroup(subcategoryFilters, subcategories, activeSubcategory, "All types", (value) => {
    activeSubcategory = value;
    renderBrowseControls();
    renderMerchants();
  });

  renderChipGroup(brandFilters, brands, activeBrand, "All brands", (value) => {
    activeBrand = value;
    renderBrowseControls();
    renderMerchants();
  });

  priceRangeFilter.value = activePriceRange;
}

function renderCategoryControls() {
  const categories = getMenuCategories();
  if (activeFilter !== "all" && !categories.some((category) => category.key === activeFilter)) {
    activeFilter = "all";
  }

  categoryFilters.innerHTML = `
    <button class="category ${activeFilter === "all" ? "active" : ""}" type="button" data-filter="all">All</button>
    ${categories.map((category) => `
      <button class="category ${activeFilter === category.key ? "active" : ""}" type="button" data-filter="${escapeHtml(category.key)}">${escapeHtml(category.label)}</button>
    `).join("")}
  `;

  categoryFilters.querySelectorAll(".category").forEach((button) => {
    button.addEventListener("click", () => {
      activeFilter = button.dataset.filter;
      activeSubcategory = "all";
      activeBrand = "all";
      renderCategoryControls();
      renderBrowseControls();
      renderMerchants();
    });
  });

  categorySuggestions.innerHTML = categories
    .map((category) => `<option value="${escapeHtml(category.label)}"></option>`)
    .join("");
}

function renderCatalogWorkbench() {
  const categories = getMenuCategories();
  const subcategories = getUniqueFieldOptions(catalog, "subcategory");
  const brands = getUniqueFieldOptions(catalog, "brand");
  fillSelectOptions(adminCategoryFilter, categories, "All categories", adminCatalogFilters.category);
  fillSelectOptions(adminSubcategoryFilter, subcategories, "All subcategories", adminCatalogFilters.subcategory);
  fillSelectOptions(adminBrandFilter, brands, "All brands", adminCatalogFilters.brand);
  adminStatusFilter.value = adminCatalogFilters.status;
  adminCatalogSearch.value = adminCatalogFilters.query;
}

function getInventoryStats() {
  const live = catalog.filter((item) => item.active && Number(item.stock || 0) > 0);
  const low = catalog.filter((item) => item.active && Number(item.stock || 0) > 0 && Number(item.stock || 0) <= lowStockThreshold);
  const soldOut = catalog.filter((item) => Number(item.stock || 0) <= 0);
  const paused = catalog.filter((item) => !item.active);
  return { live, low, soldOut, paused };
}

function renderInventoryDashboard() {
  if (!inventoryLiveCount) return;
  const stats = getInventoryStats();
  inventoryLiveCount.textContent = stats.live.length;
  inventoryLowCount.textContent = stats.low.length;
  inventorySoldOutCount.textContent = stats.soldOut.length;
  inventoryPausedCount.textContent = stats.paused.length;
  const lowNames = stats.low.slice(0, 3).map((item) => `${item.name} (${Number(item.stock || 0)})`);
  inventoryActionNote.textContent = lowNames.length
    ? `Low stock: ${lowNames.join(", ")}.`
    : `Low stock means ${lowStockThreshold} or fewer units left.`;
}

function loadDesign() {
  const saved = localStorage.getItem("sutterButtesDesign");
  return saved ? JSON.parse(saved) : { ...defaultDesign };
}

function saveDesign() {
  localStorage.setItem("sutterButtesDesign", JSON.stringify(design));
  saveSettingToBackend("design", design);
}

function loadFrontPage() {
  const saved = localStorage.getItem("sutterButtesFrontPage");
  return saved ? { ...defaultFrontPage, ...JSON.parse(saved) } : { ...defaultFrontPage };
}

function saveFrontPage() {
  localStorage.setItem("sutterButtesFrontPage", JSON.stringify(frontPage));
  saveSettingToBackend("front_page", frontPage);
}

function loadPromo() {
  const saved = localStorage.getItem("sutterButtesPromo");
  return saved ? { ...defaultPromo, ...JSON.parse(saved) } : { ...defaultPromo };
}

function savePromo() {
  localStorage.setItem("sutterButtesPromo", JSON.stringify(promo));
  saveSettingToBackend("promo", promo);
}

function parseShoutouts(text) {
  return text.split("\n").map((line) => {
    const [eyebrow = "", headline = "", description = ""] = line.split("|").map((part) => part.trim());
    return { eyebrow, headline, description };
  }).filter((item) => item.eyebrow || item.headline || item.description);
}

function formatShoutouts(shoutouts = []) {
  return shoutouts.map((item) => `${item.eyebrow || ""} | ${item.headline || ""} | ${item.description || ""}`).join("\n");
}

function parseImageList(text) {
  return text.split("\n").map((line) => line.trim()).filter(Boolean);
}

function formatImageList(images = []) {
  return images.join("\n");
}

function parseInviteCodes(text) {
  return text.split("\n").map((line) => line.trim().toUpperCase()).filter(Boolean);
}

function formatInviteCodes(codes = []) {
  return codes.join("\n");
}

function loadAccessCodes() {
  const saved = localStorage.getItem("sutterButtesAccessCodes");
  const parsed = saved ? { ...defaultAccessCodes, ...JSON.parse(saved) } : { ...defaultAccessCodes };
  const guest = typeof parsed.guest === "object"
    ? { ...defaultAccessCodes.guest, ...parsed.guest }
    : { ...defaultAccessCodes.guest, code: parsed.guest || defaultAccessCodes.guest.code };
  return {
    ...parsed,
    guest: {
      code: normalizeAccessCode(guest.code),
      label: guest.label || defaultAccessCodes.guest.label,
      expires: guest.expires || ""
    },
    customer: normalizeAccessCode(parsed.customer),
    admin: normalizeAccessCode(parsed.admin),
    invites: []
  };
}

function saveAccessCodes() {
  localStorage.setItem("sutterButtesAccessCodes", JSON.stringify(accessCodes));
  saveAccessCodesToBackend();
}

function loadDeliverySettings() {
  const saved = localStorage.getItem("sutterButtesDeliverySettings");
  if (!saved) return { ...defaultDeliverySettings };

  const parsed = JSON.parse(saved);
  const promoCodes = Array.isArray(parsed.promoCodes)
    ? parsed.promoCodes
    : parsed.promoCodesText
      ? parsePromoCodes(parsed.promoCodesText)
      : defaultDeliverySettings.promoCodes;
  const bundleDeals = Array.isArray(parsed.bundleDeals)
    ? parsed.bundleDeals
    : parsed.bundleDealsText
      ? parseBundleDeals(parsed.bundleDealsText)
      : defaultDeliverySettings.bundleDeals;
  return {
    ...defaultDeliverySettings,
    ...parsed,
    minimumOrder: parsed.minimumOrder ?? parsed.lateMinimum ?? defaultDeliverySettings.minimumOrder,
    minimumOrderFee: parsed.minimumOrderFee ?? parsed.lateFee ?? defaultDeliverySettings.minimumOrderFee,
    rushDeliveryFee: parsed.rushDeliveryFee ?? defaultDeliverySettings.rushDeliveryFee,
    extendedDeliveryFee: parsed.extendedDeliveryFee ?? defaultDeliverySettings.extendedDeliveryFee,
    promoCodes,
    bundleDeals
  };
}

function saveDeliverySettings() {
  localStorage.setItem("sutterButtesDeliverySettings", JSON.stringify(deliverySettings));
  saveSettingToBackend("delivery_settings", deliverySettings);
}

function loadBusinessSettings() {
  const saved = localStorage.getItem("sutterButtesBusinessSettings");
  return saved ? { ...defaultBusinessSettings, ...JSON.parse(saved) } : { ...defaultBusinessSettings };
}

function saveBusinessSettings() {
  localStorage.setItem("sutterButtesBusinessSettings", JSON.stringify(businessSettings));
  saveSettingToBackend("business_settings", businessSettings);
}

function loadTeamMembers() {
  const saved = localStorage.getItem("sutterButtesTeamMembers");
  const members = saved ? JSON.parse(saved) : [];
  return members.map(normalizeTeamMember).filter((member) => member.name || member.email || member.passcode);
}

function loadMemberRecords() {
  const saved = localStorage.getItem("sutterButtesMemberRecords");
  const records = saved ? JSON.parse(saved) : [];
  return records.map(normalizeMemberRecord).filter((member) => member.name || member.phone || member.email || member.code);
}

function saveMemberRecords() {
  localStorage.setItem("sutterButtesMemberRecords", JSON.stringify(memberRecords));
  renderMemberAdminList();
  renderAccessSummary();
  if (!backendConfigured()) {
    setBackendStatus("Members saved locally. Backend unavailable.");
    return;
  }
  if (window.SutterBackend?.saveMembers) {
    window.SutterBackend.saveMembers(memberRecords)
      .then(() => setBackendStatus("Members synced."))
      .catch((error) => {
        setBackendStatus(`Members saved locally. Sync failed: ${error.message}`);
        saveSettingToBackend("members", memberRecords);
      });
  } else {
    saveSettingToBackend("members", memberRecords);
  }
}

function saveTeamMembers() {
  localStorage.setItem("sutterButtesTeamMembers", JSON.stringify(teamMembers));
  saveSettingToBackend("team_members", teamMembers);
  renderTeamMembers();
  renderAccessSummary();
  updateAdminPermissions();
}

function loadCart() {
  const saved = localStorage.getItem("sutterButtesCart");
  return saved ? JSON.parse(saved) : [];
}

function saveCart() {
  localStorage.setItem("sutterButtesCart", JSON.stringify(cart));
}

function loadCustomerReceipts() {
  const saved = localStorage.getItem("sutterButtesCustomerReceipts");
  const sessionSaved = sessionStorage.getItem("sutterButtesCustomerSessionReceipts");
  const persistedReceipts = saved ? JSON.parse(saved) : [];
  const memberReceipts = persistedReceipts.filter((receipt) =>
    receipt.memberId || receipt.memberCode || receipt.accessLane === "approved_member"
  );
  if (memberReceipts.length !== persistedReceipts.length) {
    localStorage.setItem("sutterButtesCustomerReceipts", JSON.stringify(memberReceipts));
  }
  const sessionReceipts = sessionSaved ? JSON.parse(sessionSaved) : [];
  return [
    ...sessionReceipts.filter((receipt) => receipt.accessLane === "guest"),
    ...memberReceipts
  ];
}

function normalizeEmail(email = "") {
  return email.trim().toLowerCase();
}

function loadMemberProfile() {
  const saved = localStorage.getItem("sutterButtesMemberProfile");
  try {
    return { name: "", phone: "", email: "", linkedAt: "", ...(saved ? JSON.parse(saved) : {}) };
  } catch {
    return { name: "", phone: "", email: "", linkedAt: "" };
  }
}

function saveMemberProfile() {
  localStorage.setItem("sutterButtesMemberProfile", JSON.stringify(memberProfile));
  applyMemberProfile();
}

function applyMemberProfile() {
  if (!memberEmailInput) return;
  const activeMember = getActiveMember();
  if (activeMember) {
    memberProfile = {
      ...memberProfile,
      memberId: activeMember.id,
      memberCode: activeMember.code,
      memberStatus: activeMember.status,
      name: memberProfile.name || activeMember.name,
      phone: memberProfile.phone || activeMember.phone,
      email: memberProfile.email || activeMember.email
    };
  }
  memberNameInput.value = memberProfile.name || "";
  memberPhoneInput.value = memberProfile.phone || "";
  memberEmailInput.value = memberProfile.email || "";
  const savedParts = [
    memberProfile.name ? "name" : "",
    memberProfile.phone ? "phone" : "",
    memberProfile.email ? "email" : ""
  ].filter(Boolean);
  const profileStatus = activeMember?.status || memberProfile.memberStatus || "";
  memberConnectionPill.textContent = customerAccessType === "member"
    ? "Approved member"
    : customerAccessType === "guest"
      ? "Guest access"
      : profileStatus === "pending" ? "Pending request" : "Member access";
  if (customerAccessType === "member") {
    memberEmailStatus.textContent = "Approved member profile connected. Orders can be tied to this member code.";
  } else if (profileStatus === "pending") {
    memberEmailStatus.textContent = `Member request pending review${savedParts.length ? ` with ${savedParts.join(", ")}` : ""}.`;
  } else if (profileStatus === "denied") {
    memberEmailStatus.textContent = "Member request denied. Contact the team if you need help.";
  } else if (profileStatus === "disabled") {
    memberEmailStatus.textContent = "Member access disabled. Contact the team if you need help.";
  } else {
    memberEmailStatus.textContent = "Submit a member request below, or enter an approved member code to connect a member profile.";
  }
  if (customerNameInput && memberProfile.name && !customerNameInput.value) {
    customerNameInput.value = memberProfile.name;
  }
  if (customerPhoneInput && memberProfile.phone && !customerPhoneInput.value) {
    customerPhoneInput.value = memberProfile.phone;
  }
  if (customerEmailInput && memberProfile.email && !customerEmailInput.value) {
    customerEmailInput.value = memberProfile.email;
  }
}

function getCheckoutMemberIdentity() {
  const activeMember = getActiveMember();
  const name = activeMember?.name || memberProfile.name || "Approved member";
  const phone = activeMember?.phone || memberProfile.phone || "On file";
  const email = activeMember?.email || memberProfile.email || "";
  return { name, phone, email };
}

function applyCheckoutMemberIdentity() {
  const isApprovedMember = customerAccessType === "member";
  const identity = getCheckoutMemberIdentity();

  if (memberCheckoutSummary) memberCheckoutSummary.hidden = !isApprovedMember;
  if (customerNameField) customerNameField.hidden = isApprovedMember;
  if (customerPhoneField) customerPhoneField.hidden = false;
  if (customerEmailField) customerEmailField.hidden = false;
  if (rememberMemberEmailField) rememberMemberEmailField.hidden = isApprovedMember;

  customerNameInput.required = !isApprovedMember;
  customerPhoneInput.required = true;

  if (isApprovedMember) {
    customerNameInput.value = identity.name;
    if (!customerPhoneInput.value || customerPhoneInput.value === "On file") {
      customerPhoneInput.value = identity.phone === "On file" ? "" : identity.phone;
    }
    if (!customerEmailInput.value) {
      customerEmailInput.value = identity.email;
    }
    if (memberCheckoutName) memberCheckoutName.textContent = `Ordering as: ${identity.name}`;
    if (memberCheckoutPhone) memberCheckoutPhone.textContent = identity.phone;
    if (memberCheckoutEmail) memberCheckoutEmail.textContent = identity.email || "Not provided";
  } else {
    if (memberProfile.name && !customerNameInput.value) customerNameInput.value = memberProfile.name;
    if (memberProfile.phone && !customerPhoneInput.value) customerPhoneInput.value = memberProfile.phone;
    if (memberProfile.email && !customerEmailInput.value) customerEmailInput.value = memberProfile.email;
  }
}

function saveCustomerReceipts() {
  const sessionReceipts = customerReceipts
    .filter((receipt) => receipt.accessLane === "guest")
    .slice(0, 8);
  const memberReceipts = customerReceipts
    .filter((receipt) => receipt.memberId || receipt.memberCode || receipt.accessLane === "approved_member")
    .slice(0, 8);
  sessionStorage.setItem("sutterButtesCustomerSessionReceipts", JSON.stringify(sessionReceipts));
  localStorage.setItem("sutterButtesCustomerReceipts", JSON.stringify(memberReceipts));
}

function getCurrentCustomerOrderAccess() {
  try {
    return JSON.parse(sessionStorage.getItem("sutterButtesCurrentCustomerOrderAccess") || "[]");
  } catch {
    return [];
  }
}

function allowCurrentCustomerOrder(orderNumber = "") {
  const normalized = String(orderNumber || "").toUpperCase();
  if (!normalized) return;
  const allowed = new Set(getCurrentCustomerOrderAccess().map((item) => String(item || "").toUpperCase()));
  allowed.add(normalized);
  sessionStorage.setItem("sutterButtesCurrentCustomerOrderAccess", JSON.stringify([...allowed].slice(-8)));
}

function hasCurrentCustomerOrderAccess(orderNumber = "") {
  const normalized = String(orderNumber || "").toUpperCase();
  return getCurrentCustomerOrderAccess().some((item) => String(item || "").toUpperCase() === normalized);
}

function clearCurrentCustomerOrderAccess() {
  sessionStorage.removeItem("sutterButtesCurrentCustomerOrderAccess");
}

function setCustomerTrackedOrder(orderNumber = "") {
  activeCustomerTrackedOrderId = String(orderNumber || "").toUpperCase();
}

function getCustomerTrackedOrder() {
  return accessLevel === "customer"
    ? activeCustomerTrackedOrderId
    : localStorage.getItem("sutterButtesLatestCustomerOrder") || "";
}

function clearCustomerTrackedOrder() {
  activeCustomerTrackedOrderId = "";
  if (accessLevel === "customer") {
    localStorage.removeItem("sutterButtesLatestCustomerOrder");
  }
}

function getActiveMemberAccess() {
  const member = getActiveMember();
  if (member) return { id: member.id || "", code: member.code || "" };
  return { id: memberProfile.memberId || activeMemberId || "", code: memberProfile.memberCode || "" };
}

function isReceiptForActiveMember(receipt = {}) {
  if (customerAccessType !== "member") return false;
  const active = getActiveMemberAccess();
  const receiptMemberId = receipt.memberId || "";
  const receiptMemberCode = normalizeAccessCode(receipt.memberCode || "");
  return Boolean(
    (active.id && receiptMemberId && active.id === receiptMemberId) ||
    (active.code && receiptMemberCode && normalizeAccessCode(active.code) === receiptMemberCode)
  );
}

function isOrderForActiveMember(order = {}) {
  if (customerAccessType !== "member") return false;
  const active = getActiveMemberAccess();
  const orderMemberId = order.memberId || "";
  const orderMemberCode = normalizeAccessCode(order.memberCode || "");
  return Boolean(
    (active.id && orderMemberId && active.id === orderMemberId) ||
    (active.code && orderMemberCode && normalizeAccessCode(active.code) === orderMemberCode)
  );
}

function canCurrentCustomerUseReceipt(receipt = {}) {
  if (accessLevel !== "customer") return true;
  if (customerAccessType === "member") return isReceiptForActiveMember(receipt);
  return customerAccessType === "guest" && hasCurrentCustomerOrderAccess(receipt.id);
}

function canCurrentCustomerUseOrder(order = {}) {
  if (accessLevel !== "customer") return true;
  if (customerAccessType === "member") return isOrderForActiveMember(order);
  return customerAccessType === "guest" && hasCurrentCustomerOrderAccess(order.id);
}

function getCustomerSafeOrder(order = {}) {
  const customerMessage = getCustomerVisibleMessage(order);
  return {
    id: order.id,
    status: normalizeOrderStatus(order.status),
    total: Number(order.total || 0),
    deliveryOption: order.deliveryOption || "",
    deliveryWindow: order.deliveryWindow || "",
    customerMessage,
    customerVisibleMessage: customerMessage,
    estimatedDeliveryTime: order.estimatedDeliveryTime || "",
    estimatedDeliveryDate: order.estimatedDeliveryDate || "",
    completedAt: order.completedAt || "",
    deniedReasonCustomer: order.deniedReasonCustomer || "",
    memberId: order.memberId || "",
    memberCode: order.memberCode || "",
    accessLane: order.accessLane || "",
    createdAt: order.createdAt || "",
    updatedAt: order.updatedAt || "",
    activity: Array.isArray(order.activity)
      ? order.activity.map((entry) => ({ at: entry.at || entry.created_at || "", action: entry.action || "" }))
      : []
  };
}

function getAllowedCustomerReceipt(orderNumber = "") {
  const target = String(orderNumber || "").toUpperCase();
  return customerReceipts.find((receipt) =>
    String(receipt.id || "").toUpperCase() === target && canCurrentCustomerUseReceipt(receipt)
  ) || null;
}

function getAllowedCustomerLocalOrder(orderNumber = "") {
  const target = String(orderNumber || "").toUpperCase();
  const order = merchantOrders.find((item) => String(item.id || "").toUpperCase() === target);
  return order && canCurrentCustomerUseOrder(order) ? getCustomerSafeOrder(order) : null;
}

function getVisibleMemberReceipts() {
  if (customerAccessType !== "member") return [];
  return customerReceipts
    .filter((receipt) => isReceiptForActiveMember(receipt) && normalizeOrderStatus(receipt.status) === "Completed")
    .sort((a, b) => new Date(getOrderTimestamp(b)).getTime() - new Date(getOrderTimestamp(a)).getTime())
    .slice(0, 5);
}

function upsertCustomerReceipt(order, options = {}) {
  const active = getActiveMemberAccess();
  const memberId = order.memberId || (customerAccessType === "member" ? active.id : "");
  const memberCode = order.memberCode || (customerAccessType === "member" ? active.code : "");
  const receipt = {
    id: order.id,
    status: order.status || "Submitted",
    total: Number(order.total || 0),
    deliveryOption: order.deliveryOption || "",
    deliveryWindow: order.deliveryWindow || "",
    customerMessage: getCustomerVisibleMessage(order),
    customerVisibleMessage: getCustomerVisibleMessage(order),
    estimatedDeliveryTime: order.estimatedDeliveryTime || "",
    estimatedDeliveryDate: order.estimatedDeliveryDate || "",
    completedAt: order.completedAt || "",
    deniedReasonCustomer: order.deniedReasonCustomer || "",
    activity: order.activity || [],
    memberId,
    memberCode,
    accessLane: order.accessLane || (customerAccessType === "guest" ? "guest" : memberId || memberCode ? "approved_member" : ""),
    createdAt: order.createdAt || new Date().toISOString(),
    updatedAt: order.updatedAt || order.activity?.[order.activity.length - 1]?.at || order.createdAt || new Date().toISOString()
  };
  customerReceipts = [
    receipt,
    ...customerReceipts.filter((item) => item.id !== receipt.id)
  ].slice(0, 8);
  saveCustomerReceipts();
  if (options.authorize !== false) {
    allowCurrentCustomerOrder(receipt.id);
  }
  if (options.setLatest !== false) {
    if (accessLevel === "customer") {
      setCustomerTrackedOrder(receipt.id);
    } else {
      localStorage.setItem("sutterButtesLatestCustomerOrder", receipt.id);
    }
  }
}

function loadOrders() {
  const saved = localStorage.getItem("sutterButtesOrders");
  const orders = saved ? JSON.parse(saved) : [...defaultMerchantOrders];
  return orders.map((order) => Array.isArray(order) ? {
    id: order[0],
    customer: "Customer",
    phone: "",
    customerEmail: "",
    contactMethod: "Text",
    address: "Address needed",
    instructions: "",
    detail: order[1],
    status: normalizeOrderStatus(order[2]),
    adminNote: "",
    customerMessage: "",
    customerVisibleMessage: "",
    estimatedDeliveryTime: "",
    estimatedDeliveryDate: "",
    completedAt: "",
    deniedReasonCustomer: "",
    subtotal: 0,
    discount: 0,
    adminDiscount: 0,
    deliveryFee: 0,
    total: 0,
    assignedTo: "",
    compliance: {},
    activity: []
  } : {
    phone: "",
    customerEmail: "",
    contactMethod: "Text",
    adminDiscount: 0,
    customerMessage: "",
    customerVisibleMessage: "",
    estimatedDeliveryTime: "",
    estimatedDeliveryDate: "",
    completedAt: "",
    deniedReasonCustomer: "",
    assignedTo: "",
    compliance: {},
    activity: [],
    ...order,
    status: normalizeOrderStatus(order.status)
  });
}

function normalizeOrderStatus(status = "Submitted") {
  const legacyStatuses = {
    Verify: "Submitted",
    Queued: "Submitted",
    Pack: "Packed"
  };
  const normalized = legacyStatuses[status] || status;
  return orderStatuses.includes(normalized) ? normalized : "Submitted";
}

function generateOrderNumber() {
  const alphabet = "23456789ABCDEFGHJKLMNPQRSTUVWXYZ";
  const existing = new Set([
    ...merchantOrders.map((order) => String(order.id || "").toUpperCase()),
    ...customerReceipts.map((receipt) => String(receipt.id || "").toUpperCase())
  ]);
  const makeToken = () => {
    const values = new Uint32Array(6);
    if (window.crypto?.getRandomValues) {
      window.crypto.getRandomValues(values);
    } else {
      values.forEach((_, index) => {
        values[index] = Math.floor(Math.random() * alphabet.length);
      });
    }
    return [...values].map((value) => alphabet[value % alphabet.length]).join("");
  };

  for (let index = 0; index < 25; index += 1) {
    const orderNumber = `SB-${makeToken()}`;
    if (!existing.has(orderNumber)) return orderNumber;
  }

  return `SB-${Date.now().toString(36).slice(-6).toUpperCase()}`;
}

function saveOrders() {
  localStorage.setItem("sutterButtesOrders", JSON.stringify(merchantOrders));
  saveOrdersToBackend();
}

function loadFeedbackMessages() {
  const saved = localStorage.getItem("sutterButtesFeedbackMessages");
  return saved ? JSON.parse(saved) : [];
}

function saveFeedbackMessages() {
  localStorage.setItem("sutterButtesFeedbackMessages", JSON.stringify(feedbackMessages));
}

function loadKnownOrderStates() {
  const saved = localStorage.getItem("sutterButtesKnownOrderStates");
  try {
    return saved ? JSON.parse(saved) : {};
  } catch {
    return {};
  }
}

function saveKnownOrderStates() {
  localStorage.setItem("sutterButtesKnownOrderStates", JSON.stringify(knownOrderStates));
}

function backendConfigured() {
  return window.SutterBackend?.isConfigured();
}

function backendReady() {
  return window.SutterBackend?.isConfigured() && window.SutterBackend?.hasSession();
}

function setBackendStatus(message) {
  if (backendStatus) backendStatus.textContent = message;
  updateStaffSyncPanel();
}

function getBackendSyncMessage() {
  if (!backendConfigured()) return "Backend unavailable. Changes save locally on this device.";
  if (!backendReady()) return "Backend configured. Sync will use the app connection when available.";
  return `Synced as ${currentAdminEmail() || "staff"}.`;
}

function updateStaffSyncPanel(message = "") {
  if (!staffSyncPanel) return;
  // TODO: If per-worker Supabase accounts are added later, this hidden status strip can become a modular sign-in surface again.
  staffSyncPanel.hidden = true;
  staffSyncPanel.setAttribute("aria-hidden", "true");
  if (staffSyncStatus) staffSyncStatus.textContent = message || getBackendSyncMessage();
  if (staffSyncForm) staffSyncForm.hidden = true;
  if (staffSyncSignOutButton) staffSyncSignOutButton.hidden = true;
}

function setOperationalSyncStatus(scope, message) {
  if (!message) return;
  const targets = {
    orders: [liveOrdersStatus],
    driver: [driverStatusNote],
    catalog: [inventoryActionNote],
    design: [designSyncStatus],
    promo: [designSyncStatus],
    settings: [deliverySyncStatus]
  }[scope] || [];

  targets.forEach((target) => {
    if (target) target.textContent = message;
  });
  if (["orders", "driver", "catalog", "design", "promo", "settings"].includes(scope)) {
    updateStaffSyncPanel(message);
  }
}

function getSaveBlockedMessage(action = "Saved") {
  if (!backendConfigured()) return `${action} locally. Backend unavailable.`;
  return "";
}

function getSettingSyncScope(key) {
  if (["front_page", "design"].includes(key)) return "design";
  if (key === "promo") return "promo";
  if (["delivery_settings", "business_settings"].includes(key)) return "settings";
  return "settings";
}

async function uploadImageFile(file, folder) {
  if (!file) return "";
  if (!backendReady() || !window.SutterBackend?.uploadImage) {
    return readUploadedImage(file);
  }

  setBackendStatus(`Uploading ${file.name}...`);
  try {
    const url = await window.SutterBackend.uploadImage(file, folder);
    setBackendStatus("Image uploaded to Supabase Storage.");
    return url;
  } catch (error) {
    setBackendStatus(`Image upload failed, using local preview: ${error.message}`);
    return readUploadedImage(file);
  }
}

async function uploadImageFiles(files, folder) {
  const fileList = [...(files || [])];
  const urls = [];
  for (const file of fileList) {
    urls.push(await uploadImageFile(file, folder));
  }
  return urls;
}

async function postNetlifyForm(formName, fields) {
  if (!location.hostname.includes("netlify.app") && location.hostname !== "") return;
  const body = new URLSearchParams({ "form-name": formName, ...fields });
  try {
    await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body
    });
  } catch (error) {
    console.warn(`${formName} email alert failed`, error);
  }
}

function sendOrderEmailAlert(order) {
  postNetlifyForm("order-alert", {
    order_number: order.id,
    customer: order.customer,
    phone: order.phone,
    email: order.customerEmail || "",
    contact_method: order.contactMethod || "Text",
    address: order.address,
    delivery: order.deliveryOption || "Standard",
    cash_due: `$${Number(order.total || 0).toFixed(2)}`,
    items: (order.items || []).join(", "),
    instructions: order.instructions || ""
  });
}

function sendFeedbackEmailAlert(message) {
  postNetlifyForm("customer-message-alert", {
    name: message.name,
    phone: message.phone,
    message: message.message
  });
}

async function saveCatalogToBackend() {
  const blockedMessage = getSaveBlockedMessage("Product menu saved");
  if (blockedMessage) {
    setOperationalSyncStatus("catalog", blockedMessage);
    return false;
  }

  try {
    setOperationalSyncStatus("catalog", "Saving product menu...");
    await window.SutterBackend.saveProducts(catalog);
    setBackendStatus("Product menu synced.");
    setOperationalSyncStatus("catalog", "Product menu synced.");
    return true;
  } catch (error) {
    setBackendStatus(`Product sync failed: ${error.message}`);
    setOperationalSyncStatus("catalog", `Product menu saved locally. Sync failed: ${error.message}`);
    return false;
  }
}

async function saveOrdersToBackend(scope = activeMode === "driver" ? "driver" : "orders") {
  const blockedMessage = getSaveBlockedMessage("Orders saved");
  if (blockedMessage) {
    setOperationalSyncStatus(scope, blockedMessage);
    return false;
  }

  try {
    setOperationalSyncStatus(scope, "Saving order updates...");
    await window.SutterBackend.saveOrders(merchantOrders);
    setBackendStatus("Orders synced.");
    setOperationalSyncStatus(scope, "Order updates synced.");
    return true;
  } catch (error) {
    setBackendStatus(`Order sync failed: ${error.message}`);
    setOperationalSyncStatus(scope, `Orders saved locally. Sync failed: ${error.message}`);
    return false;
  }
}

async function submitCustomerOrderToBackend(order) {
  if (!backendConfigured()) return;
  try {
    await window.SutterBackend.submitCustomerOrder(order);
  } catch (error) {
    console.warn("Customer order backend submit failed", error);
  }
}

async function submitFeedbackToBackend(message) {
  if (!backendConfigured()) return;
  try {
    await window.SutterBackend.submitFeedback(message);
  } catch (error) {
    console.warn("Customer feedback backend submit failed", error);
  }
}

async function loadFeedbackFromBackend(silent = false) {
  if (!backendConfigured()) return;
  try {
    const messages = await window.SutterBackend.loadFeedback();
    const signature = JSON.stringify(messages.map((message) => `${message.id}:${message.status}:${message.updatedAt}`));
    if (signature !== lastFeedbackSignature) {
      feedbackMessages = messages;
      lastFeedbackSignature = signature;
      saveFeedbackMessages();
      renderFeedbackInbox();
      renderAdminIndicators();
      const knownSet = new Set(knownFeedbackIds);
      const newMessages = messages.filter((message) => !knownSet.has(message.id) && message.status === "New");
      knownFeedbackIds = messages.map((message) => message.id);
      localStorage.setItem("sutterButtesKnownFeedbackIds", JSON.stringify(knownFeedbackIds));
      if (newMessages.length) {
        showAdminNotice(`${newMessages.length} new member message${newMessages.length === 1 ? "" : "s"}`, "Open Messages in the order queue to review.");
      }
    }
  } catch (error) {
    if (!silent) setBackendStatus(`Feedback pull failed: ${error.message}`);
  }
}

async function lookupCustomerOrder(orderNumber, phone) {
  const exactOrderNumber = orderNumber.trim().toUpperCase();
  if (!exactOrderNumber) return;

  const activeMemberAccess = getActiveMemberAccess();
  const storedReceipt = customerReceipts.find((receipt) => String(receipt.id || "").toUpperCase() === exactOrderNumber);
  const localReceipt = accessLevel === "customer"
    ? storedReceipt && canCurrentCustomerUseReceipt(storedReceipt) ? storedReceipt : null
    : storedReceipt;
  const localCustomerOrder = accessLevel === "customer"
    ? getAllowedCustomerLocalOrder(exactOrderNumber)
    : null;
  const localOrder = accessLevel === "customer"
    ? null
    : merchantOrders.find((order) => String(order.id || "").toUpperCase() === exactOrderNumber);
  if (localOrder) {
    mergeCustomerOrder(localOrder);
    lookupStatus.textContent = `Found ${localOrder.id}. ${getCustomerStatusLabel(localOrder.status)}.`;
    return;
  }

  if (!backendConfigured()) {
    const localTrackingOrder = localCustomerOrder || localReceipt;
    if (accessLevel === "customer" && localTrackingOrder) {
      allowCurrentCustomerOrder(localTrackingOrder.id);
      mergeCustomerOrder(localTrackingOrder);
      setCustomerTrackedOrder(localTrackingOrder.id);
      renderCustomerOrderStatus();
      lookupStatus.textContent = `Found ${localTrackingOrder.id}. ${getCustomerStatusLabel(localTrackingOrder.status)}.`;
      return;
    }
    lookupStatus.textContent = "Order not found. Please check your order number.";
    return;
  }

  lookupStatus.textContent = "Looking up order...";
  try {
    const order = customerAccessType === "member"
      ? await window.SutterBackend.lookupMemberOwnedOrder(exactOrderNumber, activeMemberAccess.id, activeMemberAccess.code)
      : await window.SutterBackend.lookupCustomerOrder(exactOrderNumber, phone?.trim?.() || "");
    if (!order) {
      const localTrackingOrder = localCustomerOrder || localReceipt;
      if (accessLevel === "customer" && localTrackingOrder) {
        allowCurrentCustomerOrder(localTrackingOrder.id);
        mergeCustomerOrder(localTrackingOrder);
        setCustomerTrackedOrder(localTrackingOrder.id);
        renderCustomerOrderStatus();
        lookupStatus.textContent = `Found saved copy for ${localTrackingOrder.id}. Live lookup has not found it yet.`;
        return;
      }
      lookupStatus.textContent = "Order not found. Please check your order number.";
      return;
    }
    const safeOrder = customerAccessType === "member"
      ? { ...order, memberId: activeMemberAccess.id, memberCode: activeMemberAccess.code, accessLane: "approved_member" }
      : { ...order, accessLane: "guest" };
    mergeCustomerOrder(safeOrder);
    lookupStatus.textContent = `Found ${safeOrder.id}. ${getCustomerStatusLabel(safeOrder.status)}.`;
  } catch (error) {
    const localTrackingOrder = localCustomerOrder || localReceipt;
    if (accessLevel === "customer" && localTrackingOrder) {
      allowCurrentCustomerOrder(localTrackingOrder.id);
      mergeCustomerOrder(localTrackingOrder);
      setCustomerTrackedOrder(localTrackingOrder.id);
      renderCustomerOrderStatus();
      lookupStatus.textContent = `Found saved copy for ${localTrackingOrder.id}. Live lookup is not available right now.`;
      return;
    }
    lookupStatus.textContent = `Lookup failed: ${error.message}`;
  }
}

function mergeCustomerOrder(order) {
  if (accessLevel === "customer") {
    upsertCustomerReceipt(order);
    renderCustomerOrderStatus();
    renderCustomerReceipts();
    return;
  }

  merchantOrders = [
    order,
    ...merchantOrders.filter((item) => item.id !== order.id)
  ];
  localStorage.setItem("sutterButtesOrders", JSON.stringify(merchantOrders));
  upsertCustomerReceipt(order);
  renderCustomerOrderStatus();
  renderCustomerReceipts();
}

async function saveSettingToBackend(key, value) {
  const scope = getSettingSyncScope(key);
  const blockedMessage = getSaveBlockedMessage("Changes saved");
  if (blockedMessage) {
    setOperationalSyncStatus(scope, blockedMessage);
    return false;
  }

  try {
    setOperationalSyncStatus(scope, "Saving changes...");
    await window.SutterBackend.saveSetting(key, value);
    setBackendStatus("Settings synced.");
    setOperationalSyncStatus(scope, "Changes synced.");
    return true;
  } catch (error) {
    setBackendStatus(`Settings sync failed: ${error.message}`);
    setOperationalSyncStatus(scope, `Changes saved locally. Sync failed: ${error.message}`);
    return false;
  }
}

async function saveAccessCodesToBackend() {
  if (!backendReady()) return;
  try {
    await window.SutterBackend.saveAccessCodes(accessCodes);
    setBackendStatus("Access codes synced.");
  } catch (error) {
    setBackendStatus(`Access code sync failed: ${error.message}`);
  }
}

async function pushAllToBackend() {
  if (!backendReady()) {
    setBackendStatus("Sign in to Supabase before pushing data.");
    return;
  }
  setBackendStatus("Pushing this browser data to Supabase...");
  const steps = [
    ["products", () => window.SutterBackend.saveProducts(catalog)],
    ["orders", () => window.SutterBackend.saveOrders(merchantOrders)],
    ["front page", () => window.SutterBackend.saveSetting("front_page", frontPage)],
    ["design", () => window.SutterBackend.saveSetting("design", design)],
    ["promos", () => window.SutterBackend.saveSetting("promo", promo)],
    ["business settings", () => window.SutterBackend.saveSetting("business_settings", businessSettings)],
    ["delivery settings", () => window.SutterBackend.saveSetting("delivery_settings", deliverySettings)],
    ["team members", () => window.SutterBackend.saveSetting("team_members", teamMembers)],
    ["members", () => window.SutterBackend.saveMembers ? window.SutterBackend.saveMembers(memberRecords) : window.SutterBackend.saveSetting("members", memberRecords)],
    ["access codes", () => window.SutterBackend.saveAccessCodes(accessCodes)]
  ];

  let activeStep = "";
  try {
    for (const [label, syncStep] of steps) {
      activeStep = label;
      setBackendStatus(`Pushing ${label}...`);
      await syncStep();
    }
    setBackendStatus("Supabase is synced with this browser.");
  } catch (error) {
    setBackendStatus(`Push failed while saving ${activeStep}: ${error.message}`);
  }
}

async function pullFromBackend() {
  if (!backendReady()) {
    setBackendStatus("Sign in to Supabase before pulling data.");
    return;
  }

  setBackendStatus("Pulling latest Supabase data...");
  const [
    products,
    orders,
    frontPageRemote,
    designRemote,
    promoRemote,
    businessRemote,
    deliveryRemote,
    teamRemote,
    membersRemote,
    feedbackRemote,
    codesRemote
  ] = await Promise.all([
    window.SutterBackend.loadProducts(),
    window.SutterBackend.loadOrders(),
    window.SutterBackend.loadSetting("front_page"),
    window.SutterBackend.loadSetting("design"),
    window.SutterBackend.loadSetting("promo"),
    window.SutterBackend.loadSetting("business_settings"),
    window.SutterBackend.loadSetting("delivery_settings"),
    window.SutterBackend.loadSetting("team_members"),
    window.SutterBackend.loadMembers ? window.SutterBackend.loadMembers().catch(() => []) : window.SutterBackend.loadSetting("members"),
    window.SutterBackend.loadFeedback(),
    window.SutterBackend.loadAccessCodes()
  ]);

  if (products.length) {
    catalog = products;
    localStorage.setItem("sutterButtesCatalogVersion", catalogVersion);
    localStorage.setItem("sutterButtesCatalog", JSON.stringify(catalog));
  }
  if (orders.length) {
    merchantOrders = orders;
    localStorage.setItem("sutterButtesOrders", JSON.stringify(merchantOrders));
  }
  if (frontPageRemote) {
    frontPage = { ...defaultFrontPage, ...frontPageRemote };
    localStorage.setItem("sutterButtesFrontPage", JSON.stringify(frontPage));
  }
  if (designRemote) {
    design = { ...defaultDesign, ...designRemote };
    localStorage.setItem("sutterButtesDesign", JSON.stringify(design));
  }
  if (promoRemote) {
    promo = { ...defaultPromo, ...promoRemote };
    localStorage.setItem("sutterButtesPromo", JSON.stringify(promo));
  }
  if (deliveryRemote) {
    deliverySettings = { ...defaultDeliverySettings, ...deliveryRemote };
    localStorage.setItem("sutterButtesDeliverySettings", JSON.stringify(deliverySettings));
  }
  if (businessRemote) {
    businessSettings = { ...defaultBusinessSettings, ...businessRemote };
    localStorage.setItem("sutterButtesBusinessSettings", JSON.stringify(businessSettings));
  }
  if (Array.isArray(teamRemote)) {
    teamMembers = teamRemote.map(normalizeTeamMember).filter((member) => member.name || member.email || member.passcode);
    localStorage.setItem("sutterButtesTeamMembers", JSON.stringify(teamMembers));
  }
  if (Array.isArray(membersRemote)) {
    memberRecords = membersRemote.map(normalizeMemberRecord);
    localStorage.setItem("sutterButtesMemberRecords", JSON.stringify(memberRecords));
  }
  if (Array.isArray(feedbackRemote)) {
    feedbackMessages = feedbackRemote;
    saveFeedbackMessages();
  }
  if (codesRemote) {
    accessCodes = codesRemote;
    localStorage.setItem("sutterButtesAccessCodes", JSON.stringify(accessCodes));
  }

  applyDesign();
  applyFrontPage();
  applyPromo();
  applyAccessCodes();
  applyDeliverySettings();
  renderCategoryControls();
  renderBrowseControls();
  renderMerchants();
  renderOrders();
  renderCatalog();
  renderTeamMembers();
  renderMemberAdminList();
  renderFeedbackInbox();
  updateBasketSummary();
  updateAdminPermissions();
  startLiveOrderRefresh();
  setBackendStatus("Pulled latest Supabase data.");
}

function filterOrdersForCurrentStaff(orders = []) {
  const role = currentAdminRole();
  const identifier = getMemberIdentifier(currentAdminMember());
  if (accessLevel === "worker" && role === "driver") {
    return orders.filter((order) => {
      const activeStatus = ["Confirmed", "Packed", "Out for delivery"].includes(order.status);
      if (!activeStatus) return false;
      return identifier ? order.assignedTo === identifier : true;
    });
  }
  return orders;
}

async function refreshOrdersFromBackend(silent = true, scope = "orders") {
  if (!["admin", "worker"].includes(accessLevel)) return;
  if (!backendConfigured()) {
    setOperationalSyncStatus(scope, "Saved locally. Backend unavailable.");
    return;
  }
  try {
    const orders = filterOrdersForCurrentStaff(await window.SutterBackend.loadOrders());
    const incomingNotices = [];
    orders.forEach((order) => {
      const previous = knownOrderStates[order.id];
      if (!previous && order.status === "Submitted") {
        incomingNotices.push({ title: `${order.id} received`, detail: `${order.customer} - ${order.detail}` });
      } else if (previous && previous.status !== order.status && ["Confirmed", "Denied", "Packed", "Out for delivery"].includes(order.status)) {
        incomingNotices.push({ title: `${order.id} is ${order.status}`, detail: `${order.customer} - ${order.adminNote || "Status changed."}` });
      }
      knownOrderStates[order.id] = { status: order.status, assignedTo: order.assignedTo || "" };
    });
    saveKnownOrderStates();
    const signature = JSON.stringify(orders.map((order) => ({
      id: order.id,
      status: order.status,
      assignedTo: order.assignedTo,
      updated: order.activity?.[order.activity.length - 1]?.at || order.updatedAt || "",
      total: order.total
    })));
    if (signature !== lastOrderSignature) {
      merchantOrders = orders;
      lastOrderSignature = signature;
      localStorage.setItem("sutterButtesOrders", JSON.stringify(merchantOrders));
      renderOrders();
      if (!silent) setBackendStatus("Orders refreshed.");
      incomingNotices.slice(0, 3).forEach((notice) => showAdminNotice(notice.title, notice.detail, true));
    }
    if (can("orders")) await loadFeedbackFromBackend(true);
    renderAdminIndicators();
    renderDriverOrders();
    const message = `Synced ${orders.length} order${orders.length === 1 ? "" : "s"}. Last check ${new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })}.`;
    setOperationalSyncStatus(scope, message);
    if (scope !== "orders") setOperationalSyncStatus("orders", message);
  } catch (error) {
    setOperationalSyncStatus(scope, `Refresh failed: ${error.message}`);
  }
}

async function refreshProductsFromBackend(silent = true) {
  if (!["admin", "worker"].includes(accessLevel) || !can("editMenu")) return;
  if (!backendConfigured()) {
    setOperationalSyncStatus("catalog", "Saved locally. Backend unavailable.");
    return;
  }
  try {
    setOperationalSyncStatus("catalog", "Refreshing product menu...");
    const products = await window.SutterBackend.loadProducts();
    if (products.length) {
      catalog = products;
      localStorage.setItem("sutterButtesCatalogVersion", catalogVersion);
      localStorage.setItem("sutterButtesCatalog", JSON.stringify(catalog));
      renderCategoryControls();
      renderBrowseControls();
      renderMerchants();
      renderCatalog();
      updateBasketSummary();
    }
    setOperationalSyncStatus("catalog", `Product menu synced${products.length ? ` (${products.length} items)` : ""}.`);
    if (!silent) setBackendStatus("Product menu refreshed.");
  } catch (error) {
    setOperationalSyncStatus("catalog", `Refresh failed: ${error.message}`);
  }
}

async function refreshDesignWorkspaceFromBackend(silent = true) {
  if (!["admin", "worker"].includes(accessLevel) || (!can("coreDesign") && !can("promo"))) return;
  if (!backendConfigured()) {
    setOperationalSyncStatus("design", "Saved locally. Backend unavailable.");
    return;
  }
  try {
    setOperationalSyncStatus("design", "Refreshing design and promo settings...");
    const [frontPageRemote, designRemote, promoRemote] = await Promise.all([
      can("coreDesign") ? window.SutterBackend.loadSetting("front_page") : Promise.resolve(null),
      can("coreDesign") ? window.SutterBackend.loadSetting("design") : Promise.resolve(null),
      can("promo") ? window.SutterBackend.loadSetting("promo") : Promise.resolve(null)
    ]);
    if (frontPageRemote) {
      frontPage = { ...defaultFrontPage, ...frontPageRemote };
      localStorage.setItem("sutterButtesFrontPage", JSON.stringify(frontPage));
    }
    if (designRemote) {
      design = { ...defaultDesign, ...designRemote };
      localStorage.setItem("sutterButtesDesign", JSON.stringify(design));
    }
    if (promoRemote) {
      promo = { ...defaultPromo, ...promoRemote };
      localStorage.setItem("sutterButtesPromo", JSON.stringify(promo));
    }
    applyDesign();
    applyFrontPage();
    applyPromo();
    setOperationalSyncStatus("design", "Design and promo settings synced.");
    if (!silent) setBackendStatus("Design workspace refreshed.");
  } catch (error) {
    setOperationalSyncStatus("design", `Refresh failed: ${error.message}`);
  }
}

async function refreshDeliveryFromBackend(silent = true) {
  if (!["admin", "worker"].includes(accessLevel) || !can("delivery")) return;
  if (!backendConfigured()) {
    setOperationalSyncStatus("settings", "Saved locally. Backend unavailable.");
    return;
  }
  try {
    setOperationalSyncStatus("settings", "Refreshing delivery settings...");
    const [deliveryRemote, businessRemote] = await Promise.all([
      window.SutterBackend.loadSetting("delivery_settings"),
      window.SutterBackend.loadSetting("business_settings")
    ]);
    if (deliveryRemote) {
      deliverySettings = { ...defaultDeliverySettings, ...deliveryRemote };
      localStorage.setItem("sutterButtesDeliverySettings", JSON.stringify(deliverySettings));
    }
    if (businessRemote) {
      businessSettings = { ...defaultBusinessSettings, ...businessRemote };
      localStorage.setItem("sutterButtesBusinessSettings", JSON.stringify(businessSettings));
    }
    applyDeliverySettings();
    renderCartReview();
    setOperationalSyncStatus("settings", "Delivery settings synced.");
    if (!silent) setBackendStatus("Delivery settings refreshed.");
  } catch (error) {
    setOperationalSyncStatus("settings", `Refresh failed: ${error.message}`);
  }
}

async function refreshMembersFromBackend(silent = true) {
  if (!can("accessCodes") || !backendConfigured() || !window.SutterBackend?.loadMembers) return;
  try {
    const members = await window.SutterBackend.loadMembers();
    memberRecords = members.map(normalizeMemberRecord);
    localStorage.setItem("sutterButtesMemberRecords", JSON.stringify(memberRecords));
    renderMemberAdminList();
    renderAccessSummary();
    if (!silent) setBackendStatus("Members refreshed.");
  } catch (error) {
    if (!silent) setBackendStatus(`Member refresh failed: ${error.message}`);
  }
}

function runModeAutoSync(mode) {
  if (!["admin", "worker"].includes(accessLevel)) return;
  if (mode === "merchant" && can("orders")) refreshOrdersFromBackend(true, "orders");
  if (mode === "driver" && can("driverBoard")) refreshOrdersFromBackend(true, "driver");
  if (mode === "catalog" && can("editMenu")) refreshProductsFromBackend(true);
  if (mode === "frontpage" && (can("coreDesign") || can("promo"))) refreshDesignWorkspaceFromBackend(true);
  if (mode === "settings" && can("delivery")) refreshDeliveryFromBackend(true);
  if (mode === "access" && can("accessCodes")) refreshMembersFromBackend(true);
}

function startLiveOrderRefresh() {
  clearInterval(liveOrderRefreshTimer);
  if (!backendConfigured() || !["admin", "worker"].includes(accessLevel)) return;
  const scope = activeMode === "driver" ? "driver" : "orders";
  refreshOrdersFromBackend(true, scope);
  liveOrderRefreshTimer = setInterval(() => refreshOrdersFromBackend(true, activeMode === "driver" ? "driver" : "orders"), liveOrderRefreshMs);
}

function stopLiveOrderRefresh() {
  clearInterval(liveOrderRefreshTimer);
  liveOrderRefreshTimer = null;
  if (liveOrdersStatus) liveOrdersStatus.textContent = "Live order refresh is off.";
}

async function refreshLatestCustomerOrder(silent = true) {
  if (!backendConfigured() || accessLevel !== "customer") {
    if (!silent && customerLiveStatus) customerLiveStatus.textContent = "Live updates are unavailable right now.";
    return;
  }
  const latestOrderId = getCustomerTrackedOrder();
  const receipt = getAllowedCustomerReceipt(latestOrderId);
  if (!latestOrderId || !receipt) {
    if (!silent && customerLiveStatus) customerLiveStatus.textContent = "Place or track an order to connect live updates.";
    return;
  }

  try {
    if (!silent && customerLiveStatus) customerLiveStatus.textContent = "Checking for order updates...";
    const activeMemberAccess = getActiveMemberAccess();
    const order = customerAccessType === "member"
      ? await window.SutterBackend.lookupMemberOwnedOrder(latestOrderId, activeMemberAccess.id, activeMemberAccess.code)
      : await window.SutterBackend.lookupCustomerOrder(latestOrderId);
    if (!order) {
      if (!silent && customerLiveStatus) customerLiveStatus.textContent = "No matching order found yet.";
      return;
    }
    mergeCustomerOrder(customerAccessType === "member"
      ? { ...order, memberId: activeMemberAccess.id, memberCode: activeMemberAccess.code, accessLane: "approved_member" }
      : { ...order, accessLane: "guest" });
    if (customerLiveStatus) {
      customerLiveStatus.textContent = `Connected. Auto-checking every ${Math.round(customerOrderRefreshMs / 1000)} seconds. Last update ${new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })}.`;
    }
    if (!silent && lookupStatus) lookupStatus.textContent = `Updated ${order.id}. Current status: ${order.status}.`;
  } catch (error) {
    if (customerLiveStatus) customerLiveStatus.textContent = `Live update check paused: ${error.message}`;
    if (!silent && lookupStatus) lookupStatus.textContent = `Update check failed: ${error.message}`;
  }
}

async function refreshMemberReceiptsFromBackend(silent = true) {
  if (!backendConfigured() || accessLevel !== "customer" || customerAccessType !== "member") return;
  const activeMemberAccess = getActiveMemberAccess();
  if (!activeMemberAccess.id && !activeMemberAccess.code) return;

  try {
    if (!silent && customerLiveStatus) customerLiveStatus.textContent = "Checking member receipts...";
    const receipts = await window.SutterBackend.lookupMemberRecentReceipts(activeMemberAccess.id, activeMemberAccess.code);
    receipts.forEach((receipt) => upsertCustomerReceipt({
      ...receipt,
      memberId: activeMemberAccess.id,
      memberCode: activeMemberAccess.code,
      accessLane: "approved_member"
    }, { setLatest: false }));
    renderCustomerReceipts();
  } catch (error) {
    if (!silent && customerLiveStatus) customerLiveStatus.textContent = `Receipt refresh failed: ${error.message}`;
  }
}

function startCustomerOrderRefresh() {
  clearInterval(customerOrderRefreshTimer);
  if (accessLevel !== "customer" || !backendConfigured()) return;
  refreshLatestCustomerOrder(true);
  refreshMemberReceiptsFromBackend(true);
  customerOrderRefreshTimer = setInterval(() => refreshLatestCustomerOrder(true), customerOrderRefreshMs);
}

function stopCustomerOrderRefresh() {
  clearInterval(customerOrderRefreshTimer);
  customerOrderRefreshTimer = null;
}

async function findApprovedMemberByCode(code) {
  const normalized = normalizeAccessCode(code);
  const localMember = memberRecords.find((member) => member.code === normalized && member.status === "approved");
  if (localMember) return localMember;
  if (!backendConfigured() || !businessSettings.approvedMemberCodesEnabled) return null;
  try {
    const remoteMember = await window.SutterBackend.lookupMemberByCode(normalized);
    if (!remoteMember || remoteMember.status !== "approved") return null;
    const savedMember = upsertMemberRecord(remoteMember);
    return savedMember;
  } catch (error) {
    console.warn("Member code lookup failed", error);
    return null;
  }
}

function lockApp() {
  localStorage.removeItem("sutterButtesAccess");
  localStorage.removeItem("sutterButtesAccessLevel");
  localStorage.removeItem("sutterButtesWorkerId");
  localStorage.removeItem("sutterButtesCustomerAccessType");
  localStorage.removeItem("sutterButtesActiveMemberId");
  accessLevel = "";
  customerAccessType = "";
  activeMemberId = "";
  activeRole = "customer";
  clearCustomerTrackedOrder();
  if (confirmationPanel) confirmationPanel.hidden = true;
  stopLiveOrderRefresh();
  stopCustomerOrderRefresh();
  document.body.classList.remove("admin-session", "worker-session", "customer-session");
  document.body.classList.add("locked");
  updateRoleAccess();
  setMode("customer");
  accessCodeInput.value = "";
  accessError.textContent = "Enter a different guest, member, worker, or admin code.";
  setTimeout(() => accessCodeInput.focus(), 50);
}

window.sutterButtesLockApp = lockApp;
document.addEventListener("click", (event) => {
  if (event.target.closest("[data-switch-access]")) lockApp();
});

function unlockApp(level, workerId = "", options = {}) {
  clearCustomerTrackedOrder();
  if (confirmationPanel) confirmationPanel.hidden = true;
  localStorage.setItem("sutterButtesAccess", "granted");
  localStorage.setItem("sutterButtesAccessLevel", level);
  if (workerId) {
    localStorage.setItem("sutterButtesWorkerId", workerId);
  } else {
    localStorage.removeItem("sutterButtesWorkerId");
  }
  customerAccessType = level === "customer" ? (options.customerAccessType || "member") : "";
  activeMemberId = options.memberId || "";
  if (customerAccessType) {
    localStorage.setItem("sutterButtesCustomerAccessType", customerAccessType);
  } else {
    localStorage.removeItem("sutterButtesCustomerAccessType");
  }
  if (activeMemberId) {
    localStorage.setItem("sutterButtesActiveMemberId", activeMemberId);
  } else {
    localStorage.removeItem("sutterButtesActiveMemberId");
  }
  if (options.member) {
    memberProfile = {
      ...memberProfile,
      memberId: options.member.id,
      memberCode: options.member.code,
      memberStatus: options.member.status,
      name: options.member.name || memberProfile.name,
      phone: options.member.phone || memberProfile.phone,
      email: options.member.email || memberProfile.email
    };
    localStorage.setItem("sutterButtesMemberProfile", JSON.stringify(memberProfile));
  }
  accessLevel = level;
  document.body.classList.remove("locked");
  updateRoleAccess();
  setRole(level === "admin" ? "admin" : level === "worker" ? "worker" : "customer");
  applyMemberProfile();
  startLiveOrderRefresh();
  startCustomerOrderRefresh();
}

function initializeAccessGate() {
  const hasAccess = localStorage.getItem("sutterButtesAccess") === "granted";
  accessLevel = localStorage.getItem("sutterButtesAccessLevel") || "";
  customerAccessType = localStorage.getItem("sutterButtesCustomerAccessType") || "";
  activeMemberId = localStorage.getItem("sutterButtesActiveMemberId") || "";
  const validAccessLevel = ["customer", "admin", "worker"].includes(accessLevel);
  if (hasAccess && !validAccessLevel) {
    lockApp();
    return;
  }
  if (!hasAccess) {
    accessLevel = "";
    customerAccessType = "";
    activeMemberId = "";
    activeRole = "customer";
    document.body.classList.remove("admin-session", "worker-session", "customer-session");
  }
  document.body.classList.toggle("locked", !hasAccess);
  updateRoleAccess();
  if (!window.SutterBackend?.isConfigured()) {
    setBackendStatus("Add your Supabase URL and anon key to backend-config.js.");
  } else if (window.SutterBackend.hasSession()) {
    setBackendStatus("Signed in to Supabase. Shared sync is available.");
  } else {
    setBackendStatus("Supabase is configured. Sign in to sync shared data.");
  }
}

function applyDesign() {
  document.documentElement.style.setProperty("--mint", design.color);
  document.documentElement.style.setProperty("--mint-dark", design.color);
  document.body.classList.toggle("theme-premium", design.preset === "premium");
  document.body.classList.toggle("theme-bright", design.preset === "bright");
  document.getElementById("brandPreviewName").textContent = design.name;
  document.getElementById("notesTitle").textContent = `${design.name} Private Portal`;
  document.title = `${design.name} Private Portal`;
  brandNameInput.value = design.name;
  brandColorInput.value = design.color;
  stylePresetInput.value = design.preset;
  frontPageInputs.layoutColor.value = design.color;
  frontPageInputs.layoutPreset.value = design.preset;
}

function applyFrontPage() {
  const brandLockup = document.querySelector(".brand-lockup");
  document.getElementById("locationText").textContent = frontPage.deliveryArea;
  document.getElementById("heroEyebrow").textContent = frontPage.heroEyebrow;
  document.getElementById("heroMerchantName").textContent = frontPage.heroTitle;
  document.getElementById("heroDescription").textContent = frontPage.heroDescription;
  const heroImages = frontPage.heroImages?.length ? frontPage.heroImages : defaultFrontPage.heroImages;
  document.documentElement.style.setProperty("--hero-image", `url("${heroImages[0]}")`);
  document.documentElement.style.setProperty("--hero-image-2", `url("${heroImages[1] || heroImages[0]}")`);
  document.getElementById("brandEyebrow").textContent = frontPage.brandEyebrow;
  document.getElementById("brandHeadline").textContent = frontPage.brandHeadline;
  document.getElementById("brandDescription").textContent = frontPage.brandDescription;
  if (brandLockup) {
    const layout = ["split", "stacked", "banner"].includes(frontPage.brandLayout) ? frontPage.brandLayout : defaultFrontPage.brandLayout;
    const panelStyle = ["light", "dark", "clean"].includes(frontPage.brandPanelStyle) ? frontPage.brandPanelStyle : defaultFrontPage.brandPanelStyle;
    brandLockup.classList.remove(
      "brand-layout-split",
      "brand-layout-stacked",
      "brand-layout-banner",
      "brand-panel-light",
      "brand-panel-dark",
      "brand-panel-clean"
    );
    brandLockup.classList.add(`brand-layout-${layout}`, `brand-panel-${panelStyle}`);
    brandLockup.style.setProperty("--brand-accent", frontPage.brandAccentColor || defaultFrontPage.brandAccentColor);
  }
  document.getElementById("homeNavLabel").textContent = frontPage.navHomeLabel || defaultFrontPage.navHomeLabel;
  document.getElementById("catalogNavLabel").textContent = frontPage.navCatalogLabel || defaultFrontPage.navCatalogLabel;
  document.getElementById("memberNavLabel").textContent = frontPage.navMemberLabel || defaultFrontPage.navMemberLabel;
  document.getElementById("cartNavLabel").textContent = frontPage.navCartLabel || defaultFrontPage.navCartLabel;
  document.getElementById("orderNavLabel").textContent = frontPage.navOrderLabel || defaultFrontPage.navOrderLabel;
  document.getElementById("quickAddButton").textContent = frontPage.homeBrowseButton || defaultFrontPage.homeBrowseButton;
  document.getElementById("homeMemberAccessButton").textContent = frontPage.homeMemberButton || defaultFrontPage.homeMemberButton;
  document.getElementById("homeTrackOrderButton").textContent = frontPage.homeTrackButton || defaultFrontPage.homeTrackButton;
  document.getElementById("homeSearchLabel").textContent = frontPage.homeSearchLabel || defaultFrontPage.homeSearchLabel;
  document.getElementById("homeSearchInput").placeholder = frontPage.homeSearchPlaceholder || defaultFrontPage.homeSearchPlaceholder;
  document.getElementById("homeSearchButton").textContent = frontPage.homeSearchButton || defaultFrontPage.homeSearchButton;
  document.getElementById("featuredDropName").textContent = frontPage.featuredDrop;
  document.getElementById("featuredDropDescription").textContent = frontPage.featuredDescription;
  document.querySelector(".digital-badge").textContent = frontPage.featuredDrop;
  document.getElementById("flowerNote").textContent = frontPage.flowerNote;
  document.getElementById("flowerCategoryButton").textContent = frontPage.flowerCategoryButton || defaultFrontPage.flowerCategoryButton;
  document.getElementById("syrupNote").textContent = frontPage.syrupNote;
  document.getElementById("syrupCategoryButton").textContent = frontPage.syrupCategoryButton || defaultFrontPage.syrupCategoryButton;
  document.getElementById("apparelNote").textContent = frontPage.apparelNote;
  document.getElementById("apparelCategoryButton").textContent = frontPage.apparelCategoryButton || defaultFrontPage.apparelCategoryButton;
  document.getElementById("checkoutButton").textContent = frontPage.cartBarButton || defaultFrontPage.cartBarButton;
  document.getElementById("cartPageBrowseButton").textContent = frontPage.cartBrowseButton || defaultFrontPage.cartBrowseButton;
  document.getElementById("cartPageCheckoutButton").textContent = frontPage.cartCheckoutButton || defaultFrontPage.cartCheckoutButton;

  Object.entries(frontPageInputs).forEach(([key, input]) => {
    if (key === "heroImages") {
      input.value = formatImageList(frontPage.heroImages || []);
    } else if (!["layoutColor", "layoutPreset", "heroImagesFile"].includes(key)) {
      input.value = frontPage[key] || defaultFrontPage[key] || "";
    }
  });
}

function applyPromo() {
  const promoBanner = document.getElementById("promoBanner");
  const shoutoutGrid = document.getElementById("shoutoutGrid");
  const brandLogoImage = document.getElementById("brandLogoImage");
  const mountainMark = document.getElementById("mountainMark");

  promoBanner.hidden = !promo.visible;
  document.getElementById("promoEyebrow").textContent = promo.eyebrow;
  document.getElementById("promoHeadline").textContent = promo.headline;
  document.getElementById("promoDescription").textContent = promo.description;
  document.getElementById("promoButton").textContent = promo.button;
  const promoImages = promo.promoImages || [];
  const promoImage = promoImages[0] || promo.heroImage || "";
  const promoImageTwo = promoImages[1] || promoImage;
  document.documentElement.style.setProperty("--promo-image", promoImage ? `url("${promoImage}")` : "none");
  document.documentElement.style.setProperty("--promo-image-2", promoImageTwo ? `url("${promoImageTwo}")` : "none");
  const shoutouts = promo.shoutouts || [];
  shoutoutGrid.innerHTML = shoutouts.map((item) => {
    const query = escapeHtml(`${item.headline || ""} ${item.description || ""}`.trim());
    return `
    <button class="shoutout-card" type="button" data-promo-query="${query}">
      <span>${escapeHtml(item.eyebrow || "Deal")}</span>
      <strong>${escapeHtml(item.headline || "Limited promo")}</strong>
      <p>${escapeHtml(item.description || "Details available while supplies last.")}</p>
    </button>
  `;
  }).join("");
  shoutoutGrid.hidden = !shoutouts.length;
  shoutoutGrid.querySelectorAll("[data-promo-query]").forEach((button) => {
    button.addEventListener("click", () => {
      focusCatalogSection({ query: button.dataset.promoQuery || "" });
    });
  });

  if (promo.logoImage) {
    brandLogoImage.src = promo.logoImage;
    brandLogoImage.hidden = false;
    mountainMark.hidden = true;
  } else {
    brandLogoImage.removeAttribute("src");
    brandLogoImage.hidden = true;
    mountainMark.hidden = false;
  }

  if (promo.heroImage && !(frontPage.heroImages && frontPage.heroImages.length)) {
    document.documentElement.style.setProperty("--hero-image", `url("${promo.heroImage}")`);
    document.documentElement.style.setProperty("--hero-image-2", `url("${promo.heroImage}")`);
  } else if (!(frontPage.heroImages && frontPage.heroImages.length)) {
    document.documentElement.style.setProperty("--hero-image", "url(\"https://images.unsplash.com/photo-1603909223429-69bb7101f420?auto=format&fit=crop&w=900&q=80\")");
    document.documentElement.style.setProperty("--hero-image-2", "url(\"https://images.unsplash.com/photo-1603909223429-69bb7101f420?auto=format&fit=crop&w=900&q=80\")");
  }

  promoInputs.visible.checked = promo.visible;
  promoInputs.eyebrow.value = promo.eyebrow;
  promoInputs.headline.value = promo.headline;
  promoInputs.description.value = promo.description;
  promoInputs.button.value = promo.button;
  promoInputs.shoutouts.value = formatShoutouts(promo.shoutouts || []);
  promoInputs.promoImages.value = formatImageList(promo.promoImages || []);
  promoInputs.logoImage.value = promo.logoImage.startsWith("data:") ? "" : promo.logoImage;
  promoInputs.heroImage.value = promo.heroImage.startsWith("data:") ? "" : promo.heroImage;
}

function applyAccessCodes() {
  if (guestCodeInput) guestCodeInput.value = accessCodes.guest?.code || "";
  if (guestCodeLabelInput) guestCodeLabelInput.value = accessCodes.guest?.label || "";
  if (guestCodeExpiresInput) guestCodeExpiresInput.value = accessCodes.guest?.expires || "";
  customerCodeInput.value = "";
  adminCodeInput.value = accessCodes.admin;
  inviteCodesInput.value = "";
  renderAccessSummary();
}

function renderAccessSummary() {
  if (!accessCodeHelp) return;
  const workerCount = teamMembers.filter((member) => member.active && member.passcode).length;
  const approvedCount = memberRecords.filter((member) => member.status === "approved").length;
  if (guestCodeSummary) guestCodeSummary.textContent = accessCodes.guest?.code
    ? `${accessCodes.guest.label || "Weekly Guest Code"}${accessCodes.guest.expires ? ` - ${accessCodes.guest.expires}` : ""}`
    : "Missing";
  if (customerCodeSummary) customerCodeSummary.textContent = "Replaced by member codes";
  if (memberCodeCount) memberCodeCount.textContent = approvedCount;
  adminCodeSummary.textContent = accessCodes.admin ? "Staff only" : "Missing";
  inviteCodeCount.textContent = "0";
  if (workerCodeCount) workerCodeCount.textContent = workerCount;
  accessCodeHelp.textContent = "Guest code is temporary. Approved member codes are unique per member and managed below.";
}

function applyDeliverySettings() {
  applyBusinessSettings();
  minimumOrderInput.value = deliverySettings.minimumOrder;
  minimumOrderFeeInput.value = deliverySettings.minimumOrderFee;
  baseDeliveryFeeInput.value = deliverySettings.baseDeliveryFee;
  rushDeliveryFeeInput.value = deliverySettings.rushDeliveryFee;
  extendedDeliveryFeeInput.value = deliverySettings.extendedDeliveryFee;
  taxRateInput.value = deliverySettings.taxRate;
  discountLabelInput.value = deliverySettings.discountLabel;
  discountPercentInput.value = deliverySettings.discountPercent;
  promoCodesInput.value = formatPromoCodes(deliverySettings.promoCodes || []);
  bundleDealsInput.value = formatBundleDeals(deliverySettings.bundleDeals || []);
  deliveryZonesInput.value = deliverySettings.zones;
}

function applyBusinessSettings() {
  if (!businessNameSettingInput) return;
  businessNameSettingInput.value = businessSettings.businessName;
  businessTypeSettingInput.value = businessSettings.businessType;
  complianceModeInput.value = businessSettings.complianceMode;
  minimumAgeInput.value = businessSettings.minimumAge;
  ageGateRequiredInput.checked = Boolean(businessSettings.ageGateRequired);
  idVerificationRequiredInput.checked = Boolean(businessSettings.idVerificationRequired);
  deliveryEnabledInput.checked = Boolean(businessSettings.deliveryEnabled);
  pickupEnabledInput.checked = Boolean(businessSettings.pickupEnabled);
  complianceChecklistEnabledInput.checked = Boolean(businessSettings.complianceChecklistEnabled);
  memberOnlyModeInput.checked = Boolean(businessSettings.memberOnlyMode);
  if (weeklyGuestCodeEnabledInput) weeklyGuestCodeEnabledInput.checked = Boolean(businessSettings.weeklyGuestCodeEnabled);
  if (guestCanViewMenuInput) guestCanViewMenuInput.checked = Boolean(businessSettings.guestCanViewMenu);
  if (guestCanPlaceFirstOrderInput) guestCanPlaceFirstOrderInput.checked = Boolean(businessSettings.guestCanPlaceFirstOrder);
  if (memberApprovalRequiredInput) memberApprovalRequiredInput.checked = Boolean(businessSettings.memberApprovalRequired);
  if (approvedMemberCodesEnabledInput) approvedMemberCodesEnabledInput.checked = Boolean(businessSettings.approvedMemberCodesEnabled);
}

function parsePromoCodes(text) {
  return text.split("\n").map((line) => {
    const [code = "", type = "percent", value = "0", label = "Promo code"] = line.split("|").map((part) => part.trim());
    const promoType = type.toLowerCase() === "fixed" ? "fixed" : "percent";
    return {
      code: code.toUpperCase(),
      type: promoType,
      value: Math.max(0, Number(value || 0)),
      label
    };
  }).filter((promo) => promo.code && promo.value > 0);
}

function formatPromoCodes(promoCodes) {
  return promoCodes.map((promo) => `${promo.code} | ${promo.type} | ${promo.value} | ${promo.label || "Promo code"}`).join("\n");
}

function parseBundleDeals(text) {
  return text.split("\n").map((line) => {
    const [label = "", scope = "all", buyQty = "0", getQty = "0", percentOff = "100"] = line.split("|").map((part) => part.trim());
    return {
      label,
      scope,
      buyQty: Math.max(0, Number(buyQty || 0)),
      getQty: Math.max(0, Number(getQty || 0)),
      percentOff: Math.max(0, Math.min(100, Number(percentOff || 0)))
    };
  }).filter((deal) => deal.label && deal.buyQty > 0 && deal.getQty > 0 && deal.percentOff > 0);
}

function formatBundleDeals(bundleDeals) {
  return bundleDeals.map((deal) => `${deal.label} | ${deal.scope || "all"} | ${deal.buyQty} | ${deal.getQty} | ${deal.percentOff}`).join("\n");
}

function getAppliedPromos() {
  if (!appliedPromoCodes.length) return [];
  return appliedPromoCodes
    .map((code) => (deliverySettings.promoCodes || []).find((promo) => promo.code.toUpperCase() === code.toUpperCase()))
    .filter(Boolean);
}

function getOrderCashTotal(order) {
  const subtotal = Number(order.subtotal || 0);
  const discount = Number(order.discount || 0);
  const adminDiscount = Number(order.adminDiscount || 0);
  const tax = Number(order.tax || 0);
  const deliveryFee = Number(order.deliveryFee || 0);
  return Math.max(0, subtotal - discount - adminDiscount + tax + deliveryFee);
}

function productMatchesDeal(product, deal) {
  const scope = (deal.scope || "all").trim().toLowerCase();
  if (!scope || scope === "all") return true;
  return product?.category?.toLowerCase() === scope || product?.name?.toLowerCase() === scope;
}

function getBundleDiscount() {
  return (deliverySettings.bundleDeals || []).reduce((dealTotal, deal) => {
    const groupSize = Number(deal.buyQty || 0) + Number(deal.getQty || 0);
    if (groupSize <= 0) return dealTotal;

    const discountRate = Math.max(0, Math.min(100, Number(deal.percentOff || 0))) / 100;
    const dealDiscount = cart.reduce((sum, item) => {
      const product = catalog.find((catalogItem) => catalogItem.id === (item.productId || item.id));
      if (!productMatchesDeal(product, deal)) return sum;

      const discountedUnits = Math.floor(Number(item.quantity || 0) / groupSize) * Number(deal.getQty || 0);
      return sum + (discountedUnits * Number(item.price || 0) * discountRate);
    }, 0);

    return dealTotal + dealDiscount;
  }, 0);
}

function getCartQuantity(productId) {
  return cart
    .filter((item) => (item.productId || item.id) === productId)
    .reduce((sum, item) => sum + item.quantity, 0);
}

function getCartItemCount() {
  return cart.reduce((sum, item) => sum + item.quantity, 0);
}

function getCartSubtotal() {
  return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

function updateBasketSummary(message = "") {
  const count = getCartItemCount();
  const subtotal = getCartSubtotal();
  basketSummary.textContent = message || `${count} ${count === 1 ? "item" : "items"}`;
  basketDetail.textContent = `$${subtotal.toFixed(2)} cash subtotal`;
  renderCartPage();
}

function addToBasket(productId) {
  const product = catalog.find((item) => item.id === productId && item.active);
  if (!product) return;
  const variants = normalizeVariants(product);
  const selectedVariantIndex = Number(document.querySelector(`[data-variant-select="${productId}"]`)?.value || 0);
  const selectedVariant = variants[selectedVariantIndex] || { label: "", price: product.price };
  const cartId = selectedVariant.label ? `${product.id}::${selectedVariant.label}` : product.id;

  const currentQuantity = getCartQuantity(productId);
  const stock = Number(product.stock || 0);
  const limit = Number(product.limit || 0);

  if (stock <= 0) {
    updateBasketSummary("Sold out");
    return;
  }

  if (currentQuantity >= stock) {
    updateBasketSummary("Stock limit reached");
    return;
  }

  if (limit > 0 && currentQuantity >= limit) {
    updateBasketSummary("Daily limit reached");
    return;
  }

  const existing = cart.find((item) => (item.cartId || item.id) === cartId);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      productId: product.id,
      cartId,
      name: selectedVariant.label ? `${product.name} - ${selectedVariant.label}` : product.name,
      price: Number(selectedVariant.price || product.price),
      variantLabel: selectedVariant.label,
      quantity: 1
    });
  }

  saveCart();
  updateBasketSummary();
  renderMerchants();
}

function changeCartQuantity(cartId, change) {
  cart = cart.map((item) => {
    if ((item.cartId || item.id) !== cartId) return item;
    return { ...item, quantity: Math.max(0, item.quantity + change) };
  }).filter((item) => item.quantity > 0);
  saveCart();
  updateBasketSummary();
  updateFeeNote();
  renderCartReview();
  renderMerchants();
}

function getOrderEstimate() {
  const subtotal = getCartSubtotal();
  const deliveryOption = deliveryOptionInput?.value || "standard";
  const minimumOrder = Number(deliverySettings.minimumOrder || 0);
  const minimumOrderFee = subtotal > 0 && subtotal < minimumOrder ? Number(deliverySettings.minimumOrderFee || 0) : 0;
  const optionFee = deliveryOption === "rush"
    ? Number(deliverySettings.rushDeliveryFee || 0)
    : deliveryOption === "extended"
      ? Number(deliverySettings.extendedDeliveryFee || 0)
      : 0;
  const deliveryFee = Number(deliverySettings.baseDeliveryFee || 0) + optionFee + minimumOrderFee;
  const discountRate = Math.max(0, Math.min(100, Number(deliverySettings.discountPercent || 0))) / 100;
  const automaticDiscount = subtotal * discountRate;
  const bundleDiscount = Math.min(Math.max(0, subtotal - automaticDiscount), getBundleDiscount());
  const promos = getAppliedPromos();
  const promoDiscountRaw = promos.reduce((sum, promo) => {
    const amount = promo.type === "fixed"
      ? Number(promo.value || 0)
      : subtotal * (Math.max(0, Math.min(100, Number(promo.value || 0))) / 100);
    return sum + amount;
  }, 0);
  const promoDiscount = Math.min(Math.max(0, subtotal - automaticDiscount - bundleDiscount), promoDiscountRaw);
  const discount = Math.min(subtotal, automaticDiscount + bundleDiscount + promoDiscount);
  const taxableSubtotal = Math.max(0, subtotal - discount);
  const tax = taxableSubtotal * (Math.max(0, Number(deliverySettings.taxRate || 0)) / 100);
  return {
    subtotal,
    automaticDiscount,
    bundleDiscount,
    promos,
    promoDiscount,
    discount,
    taxableSubtotal,
    tax,
    deliveryOption,
    optionFee,
    minimumOrder,
    minimumOrderFee,
    deliveryFee,
    total: taxableSubtotal + tax + deliveryFee
  };
}

function updateFeeNote() {
  const estimate = getOrderEstimate();
  const deliveryLabel = getDeliveryOptionLabel(estimate.deliveryOption);
  const feeText = estimate.deliveryFee > 0
    ? `$${estimate.deliveryFee.toFixed(2)} delivery/service fee included for ${deliveryLabel.toLowerCase()}${estimate.minimumOrderFee ? ` and orders under $${estimate.minimumOrder}` : ""}.`
    : "No delivery fee on this order right now.";
  const idText = businessSettings.idVerificationRequired
    ? ` ID verification${businessSettings.ageGateRequired ? ` (${businessSettings.minimumAge}+)` : ""} may be required at fulfillment.`
    : "";
  const fulfillmentText = businessSettings.pickupEnabled && !businessSettings.deliveryEnabled
    ? "Pickup details are confirmed after review."
    : "A team member will confirm the fulfillment window after review.";
  feeNote.textContent = `Cash only. Estimated subtotal $${estimate.subtotal.toFixed(2)}. ${feeText} Estimated cash due: $${estimate.total.toFixed(2)}.${idText} ${fulfillmentText}`;
}

function getDeliveryOptionLabel(option) {
  if (option === "rush") return "Rush delivery";
  if (option === "extended") return "Farther delivery area";
  return "Standard local delivery";
}

function renderCartReview() {
  const estimate = getOrderEstimate();
  cartLines.innerHTML = cart.length ? cart.map((item) => {
    const itemName = escapeHtml(item.name);
    const itemId = escapeHtml(item.cartId || item.id);
    return `
    <div class="cart-line">
      <div>
        <strong>${itemName}</strong>
        <p>$${item.price.toFixed(2)} x ${item.quantity}</p>
      </div>
      <div class="cart-line-actions">
        <button type="button" data-cart-minus="${itemId}" aria-label="Remove one ${itemName}">-</button>
        <span>${item.quantity}</span>
        <button type="button" data-cart-plus="${itemId}" aria-label="Add one ${itemName}">+</button>
        <button type="button" data-cart-remove="${itemId}" aria-label="Remove ${itemName}">Remove</button>
      </div>
      <span>$${(item.price * item.quantity).toFixed(2)}</span>
    </div>
  `;
  }).join("") : "<p>Your cart is empty.</p>";

  cartLines.querySelectorAll("[data-cart-minus]").forEach((button) => {
    button.addEventListener("click", () => changeCartQuantity(button.dataset.cartMinus, -1));
  });
  cartLines.querySelectorAll("[data-cart-plus]").forEach((button) => {
    button.addEventListener("click", () => changeCartQuantity(button.dataset.cartPlus, 1));
  });
  cartLines.querySelectorAll("[data-cart-remove]").forEach((button) => {
    button.addEventListener("click", () => {
      cart = cart.filter((item) => (item.cartId || item.id) !== button.dataset.cartRemove);
      saveCart();
      updateBasketSummary();
      updateFeeNote();
      renderCartReview();
      renderCartPage();
      renderMerchants();
    });
  });

  const discountLabel = escapeHtml(deliverySettings.discountLabel || "Automatic discount");
  const promoLabel = estimate.promos.length
    ? estimate.promos.map((promo) => escapeHtml(promo.code)).join(", ")
    : "Promo code";
  cartTotals.innerHTML = `
    <div><span>Subtotal</span><strong>$${estimate.subtotal.toFixed(2)}</strong></div>
    <div><span>${discountLabel}</span><strong>-$${estimate.automaticDiscount.toFixed(2)}</strong></div>
    <div><span>Bundle deals</span><strong>-$${estimate.bundleDiscount.toFixed(2)}</strong></div>
    <div><span>${promoLabel}</span><strong>-$${estimate.promoDiscount.toFixed(2)}</strong></div>
    <div><span>Tax (${Number(deliverySettings.taxRate || 0)}%)</span><strong>$${estimate.tax.toFixed(2)}</strong></div>
    <div><span>${getDeliveryOptionLabel(estimate.deliveryOption)}</span><strong>$${(Number(deliverySettings.baseDeliveryFee || 0) + estimate.optionFee).toFixed(2)}</strong></div>
    <div><span>Minimum order fee</span><strong>$${estimate.minimumOrderFee.toFixed(2)}</strong></div>
    <div class="cart-total"><span>Cash due</span><strong>$${estimate.total.toFixed(2)}</strong></div>
  `;
}

function renderCartPage() {
  if (!cartPageLines || !cartPageTotals) return;
  const estimate = getOrderEstimate();
  cartPageLines.innerHTML = cart.length ? cart.map((item) => {
    const itemName = escapeHtml(item.name);
    const itemId = escapeHtml(item.cartId || item.id);
    return `
    <div class="cart-line">
      <div>
        <strong>${itemName}</strong>
        <p>$${item.price.toFixed(2)} x ${item.quantity}</p>
      </div>
      <div class="cart-line-actions">
        <button type="button" data-cart-page-minus="${itemId}" aria-label="Remove one ${itemName}">-</button>
        <span>${item.quantity}</span>
        <button type="button" data-cart-page-plus="${itemId}" aria-label="Add one ${itemName}">+</button>
        <button type="button" data-cart-page-remove="${itemId}" aria-label="Remove ${itemName}">Remove</button>
      </div>
      <span>$${(item.price * item.quantity).toFixed(2)}</span>
    </div>
  `;
  }).join("") : "<p>Your cart is empty. Browse the catalog to choose products intentionally.</p>";

  cartPageLines.querySelectorAll("[data-cart-page-minus]").forEach((button) => {
    button.addEventListener("click", () => changeCartQuantity(button.dataset.cartPageMinus, -1));
  });
  cartPageLines.querySelectorAll("[data-cart-page-plus]").forEach((button) => {
    button.addEventListener("click", () => changeCartQuantity(button.dataset.cartPagePlus, 1));
  });
  cartPageLines.querySelectorAll("[data-cart-page-remove]").forEach((button) => {
    button.addEventListener("click", () => {
      cart = cart.filter((item) => (item.cartId || item.id) !== button.dataset.cartPageRemove);
      saveCart();
      updateBasketSummary();
      updateFeeNote();
      renderCartReview();
      renderMerchants();
    });
  });

  cartPageTotals.innerHTML = `
    <div><span>Subtotal</span><strong>$${estimate.subtotal.toFixed(2)}</strong></div>
    <div><span>Discounts</span><strong>-$${estimate.discount.toFixed(2)}</strong></div>
    <div><span>Tax (${Number(deliverySettings.taxRate || 0)}%)</span><strong>$${estimate.tax.toFixed(2)}</strong></div>
    <div><span>Delivery / service</span><strong>$${estimate.deliveryFee.toFixed(2)}</strong></div>
    <div class="cart-total"><span>Estimated cash due</span><strong>$${estimate.total.toFixed(2)}</strong></div>
  `;
  if (cartPageCheckoutButton) {
    cartPageCheckoutButton.disabled = !cart.length;
    cartPageCheckoutButton.title = cart.length ? "Continue to checkout" : "Add products from the catalog first";
  }
}

function playAdminAlertTone() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const context = new AudioContext();
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.type = "sine";
    oscillator.frequency.value = 880;
    gain.gain.setValueAtTime(0.001, context.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.16, context.currentTime + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.001, context.currentTime + 0.45);
    oscillator.connect(gain);
    gain.connect(context.destination);
    oscillator.start();
    oscillator.stop(context.currentTime + 0.5);
  } catch {
    // Audio alerts are a convenience only.
  }
}

function showAdminNotice(title, detail, useSound = true) {
  adminAlert.hidden = false;
  adminAlertTitle.textContent = title;
  adminAlertBody.textContent = detail;
  if (useSound) playAdminAlertTone();

  if ("Notification" in window && Notification.permission === "granted") {
    new Notification(title, {
      body: detail,
      icon: "assets/icon.svg"
    });
  }
}

function notifyAdmin(orderId, detail) {
  showAdminNotice(`${orderId} received`, detail);
}

function placeOrder() {
  if (getCartItemCount() === 0) {
    basketSummary.textContent = "Add items first";
    return;
  }

  updateFeeNote();
  renderCartReview();
  applyCheckoutMemberIdentity();
  checkoutPanel.hidden = false;
  const focusTarget = customerAccessType === "member" ? customerContactMethodInput : customerNameInput;
  focusTarget.focus();
}

function showOrderConfirmation(order) {
  confirmationOrderNumber.textContent = order.id;
  confirmationMessage.textContent = `${order.customer}, your request was sent for review. A worker can still confirm or deny it, and we will follow up by ${order.contactMethod || "text"}.`;
  confirmationTotal.textContent = `$${Number(order.total || 0).toFixed(2)}`;
  const submittedAt = order.createdAt ? new Date(order.createdAt) : new Date();
  const orderId = escapeHtml(order.id);
  const orderPhone = escapeHtml(order.phone || "");
  const orderEmail = escapeHtml(order.customerEmail || "");
  const deliveryOption = escapeHtml(order.deliveryOption || "Standard");
  const address = escapeHtml(order.address || "");
  confirmationDetails.innerHTML = `
    <div><span>Confirmation number</span><strong>${orderId}</strong></div>
    <div><span>Submitted</span><strong>${submittedAt.toLocaleString([], { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" })}</strong></div>
    <div><span>Status</span><strong>${order.status === "Submitted" ? "Pending review" : escapeHtml(order.status)}</strong></div>
    <div><span>Contact</span><strong>${orderPhone}</strong></div>
    ${order.customerEmail ? `<div><span>Email</span><strong>${orderEmail}</strong></div>` : ""}
    <div><span>Delivery</span><strong>${deliveryOption}</strong></div>
    <div><span>Address</span><strong>${address}</strong></div>
    <div><span>Lookup</span><strong>Use this number to track customer-safe updates</strong></div>
  `;
  confirmationItems.innerHTML = `
    <h3>Items</h3>
    ${(order.items || []).map((item) => `<p>${escapeHtml(item)}</p>`).join("")}
    ${order.promoCode ? `<p><strong>Promo:</strong> ${escapeHtml(order.promoCode)}</p>` : ""}
  `;
  lookupOrderInput.value = "";
  lookupPhoneInput.value = "";
  confirmationPanel.hidden = false;
}

function submitOrderRequest() {
  if (customerAccessType === "guest" && !businessSettings.guestCanPlaceFirstOrder) {
    basketDetail.textContent = "Member approval is required before placing an order request.";
    if (feeNote) feeNote.textContent = "Submit a member access request first. The team can approve you and issue a member code.";
    return;
  }
  const orderId = generateOrderNumber();
  const estimate = getOrderEstimate();
  const items = cart.map((item) => `${item.quantity}x ${item.name}`);
  const detail = `${getCartItemCount()} item${getCartItemCount() === 1 ? "" : "s"} - cash due $${estimate.total.toFixed(2)}`;
  const activeMemberAccess = customerAccessType === "member"
    ? getActiveMemberAccess()
    : { id: "", code: "" };
  const memberIdentity = customerAccessType === "member"
    ? getCheckoutMemberIdentity()
    : null;
  const checkoutIdentity = customerAccessType === "member"
    ? {
        name: memberIdentity.name,
        phone: customerPhoneInput.value.trim() || (memberIdentity.phone === "On file" ? "" : memberIdentity.phone),
        email: normalizeEmail(customerEmailInput.value || memberIdentity.email || "")
      }
    : {
        name: customerNameInput.value.trim(),
        phone: customerPhoneInput.value.trim(),
        email: normalizeEmail(customerEmailInput.value)
      };
  const order = {
    id: orderId,
    customer: checkoutIdentity.name,
    phone: checkoutIdentity.phone,
    customerEmail: normalizeEmail(checkoutIdentity.email || ""),
    contactMethod: customerContactMethodInput.value,
    address: customerAddressInput.value.trim(),
    deliveryOption: getDeliveryOptionLabel(estimate.deliveryOption),
    deliveryWindow: "",
    promoCode: estimate.promos.map((promo) => promo.code).join(", "),
    promoLabel: estimate.promos.map((promo) => promo.label || "Promo code").join(", "),
    instructions: deliveryInstructionsInput.value.trim() || "No extra instructions.",
    detail,
    items,
    status: "Submitted",
    adminNote: "",
    customerMessage: "",
    customerVisibleMessage: "",
    estimatedDeliveryTime: "",
    estimatedDeliveryDate: "",
    completedAt: "",
    deniedReasonCustomer: "",
    subtotal: estimate.subtotal,
    discount: estimate.discount,
    bundleDiscount: estimate.bundleDiscount,
    tax: estimate.tax,
    deliveryFee: estimate.deliveryFee,
    adminDiscount: 0,
    total: estimate.total,
    createdAt: new Date().toISOString(),
    memberId: activeMemberAccess.id,
    memberCode: activeMemberAccess.code,
    accessLane: customerAccessType === "guest" ? "guest" : activeMemberAccess.id || activeMemberAccess.code ? "approved_member" : "member_code",
    assignedTo: "",
    compliance: {},
    activity: [{
      at: new Date().toISOString(),
      actor: customerAccessType === "guest" ? "Guest" : "Member",
      role: "customer",
      action: customerAccessType === "guest" ? "Submitted guest order" : "Submitted order",
      note: detail
    }]
  };

  if (customerAccessType !== "member" && rememberMemberEmailInput.checked) {
    memberProfile = {
      ...memberProfile,
      name: order.customer,
      phone: order.phone === "On file" ? memberProfile.phone || "" : order.phone,
      email: order.customerEmail || memberProfile.email || "",
      memberId: customerAccessType === "member" ? order.memberId || memberProfile.memberId || "" : "",
      memberCode: customerAccessType === "member" ? order.memberCode || memberProfile.memberCode || "" : "",
      linkedAt: new Date().toISOString()
    };
    saveMemberProfile();
  }

  if (order.memberId) {
    memberRecords = memberRecords.map((member) => member.id === order.memberId
      ? { ...member, lastOrderAt: order.createdAt }
      : member);
    localStorage.setItem("sutterButtesMemberRecords", JSON.stringify(memberRecords));
    saveSettingToBackend("members", memberRecords);
  }

  merchantOrders = [order, ...merchantOrders];
  cart.forEach((cartItem) => {
    catalog = catalog.map((product) => product.id === (cartItem.productId || cartItem.id)
      ? { ...product, stock: Math.max(0, Number(product.stock || 0) - cartItem.quantity) }
      : product);
  });
  localStorage.setItem("sutterButtesOrders", JSON.stringify(merchantOrders));
  upsertCustomerReceipt(order, { setLatest: false, authorize: customerAccessType === "guest" });
  clearCustomerTrackedOrder();
  if (backendReady()) {
    window.SutterBackend.saveOrder(order).catch((error) => setBackendStatus(`Order sync failed: ${error.message}`));
  } else {
    submitCustomerOrderToBackend(order);
  }
  saveCatalog();
  renderOrders();
  renderCustomerOrderStatus();
  renderCustomerReceipts();
  showOrderConfirmation(order);
  sendOrderEmailAlert(order);
  notifyAdmin(orderId, `${order.customer} - ${detail}`);
  cart = [];
  saveCart();
  basketSummary.textContent = "Order sent";
  basketDetail.textContent = "$0.00 cash subtotal";
  checkoutPanel.hidden = true;
  checkoutForm.reset();
  appliedPromoCodes = [];
  promoCodeMessage.textContent = "";
  renderMerchants();
  renderCatalog();
}

function readUploadedImage(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => resolve(reader.result));
    reader.addEventListener("error", reject);
    reader.readAsDataURL(file);
  });
}

async function readUploadedImages(fileList) {
  return Promise.all([...fileList].map((file) => readUploadedImage(file)));
}

function resetCatalogForm() {
  editingItemId = null;
  pendingImageData = "";
  pendingImageFile = null;
  catalogForm.reset();
  catalogSubmitButton.textContent = "Add item";
  cancelEditButton.hidden = true;
}

function renderMerchants() {
  if (customerAccessType === "guest" && !businessSettings.guestCanViewMenu) {
    merchantList.innerHTML = `<section class="empty-results"><h3>Member approval required</h3><p>Submit a member access request to view the private catalog.</p></section>`;
    return;
  }
  const query = searchInput.value.trim().toLowerCase();
  const activeProducts = catalog.filter((product) => product.active).map((product) => ({
    ...product,
    type: getCategoryKey(product.category)
  }));
  const filtered = activeProducts.filter((product) => {
    const matchesFilter = activeFilter === "all" || product.type === activeFilter;
    const matchesSubcategory = activeSubcategory === "all" || (product.subcategory || "").toLowerCase() === activeSubcategory;
    const matchesBrand = activeBrand === "all" || (product.brand || "").toLowerCase() === activeBrand;
    const matchesPrice = matchesPriceRange(product);
    const matchesSearch = !query || `${product.name} ${product.category} ${product.subcategory || ""} ${product.brand || ""} ${product.tags || ""}`.toLowerCase().includes(query);
    return matchesFilter && matchesSubcategory && matchesBrand && matchesPrice && matchesSearch;
  });

  merchantList.innerHTML = filtered.length ? filtered.map((product) => {
    const inCart = getCartQuantity(product.id);
    const stock = Number(product.stock || 0);
    const limit = Number(product.limit || 0);
    const isSoldOut = stock <= 0;
    const limitReached = (limit > 0 && inCart >= limit) || inCart >= stock;
    const variants = normalizeVariants(product);
    const productId = escapeHtml(product.id);
    const name = escapeHtml(product.name);
    const image = escapeHtml(product.image || defaultProductImage);
    const description = escapeHtml(product.description || product.category || "Product");
    const subcategory = escapeHtml(product.subcategory || "");
    const brand = escapeHtml(product.brand || "");
    const firstTag = product.tags ? escapeHtml(product.tags.split(",")[0]) : "";
    return `
    <article class="store-card">
      <div class="store-media">
        <img class="store-image" src="${image}" alt="${name}">
        <span class="stock-pill ${isSoldOut ? "hot" : ""}">${isSoldOut ? "Sold out" : `${stock} left`}</span>
      </div>
      <div class="store-copy">
        <h3>${name}</h3>
        <p>${description}</p>
        <div class="product-meta">
          <span>${variants.length ? `From $${Math.min(...variants.map((variant) => Number(variant.price || product.price))).toFixed(2)}` : `$${product.price.toFixed(2)}`}</span>
          ${product.subcategory ? `<span>${subcategory}</span>` : ""}
          ${product.brand ? `<span>${brand}</span>` : ""}
          ${limit ? `<span>Limit ${limit}</span>` : ""}
          ${firstTag ? `<span>${firstTag}</span>` : ""}
        </div>
        ${variants.length ? `
          <select class="variant-select" data-variant-select="${productId}" aria-label="${name} size">
            ${variants.map((variant, index) => `<option value="${index}">${escapeHtml(variant.label)} - $${Number(variant.price).toFixed(2)}</option>`).join("")}
          </select>
          <p>More than a full oz? Please inquire directly.</p>
        ` : ""}
        ${inCart ? `<p>${inCart} in cart</p>` : ""}
      </div>
      <button class="mini-button" type="button" aria-label="Add ${name}" data-add-product="${productId}" ${isSoldOut || limitReached ? "disabled" : ""}>+</button>
    </article>
  `}).join("") : `<section class="empty-results"><h3>No products found</h3><p>Try clearing filters or checking another category.</p></section>`;

  merchantList.querySelectorAll("[data-add-product]").forEach((button) => {
    button.addEventListener("click", () => addToBasket(button.dataset.addProduct));
  });
}

function renderCards(targetId, items, className) {
  const target = document.getElementById(targetId);
  target.innerHTML = items.map(([title, detail, tag]) => `
    <article class="${className}">
      <div>
        <h3>${escapeHtml(title)}</h3>
        <p>${escapeHtml(detail)}</p>
      </div>
      <span class="tag ${tag === "Hot" ? "hot" : ""}">${escapeHtml(tag)}</span>
    </article>
  `).join("");
}

function renderOrders() {
  const target = document.getElementById("merchantOrders");
  const self = currentAdminMember();
  const activeDrivers = teamMembers.filter((member) => member.active && canMember(member, "driverBoard"));
  const selfIdentifier = getMemberIdentifier(self);
  if (selfIdentifier && can("driverBoard") && !activeDrivers.some((member) => getMemberIdentifier(member) === selfIdentifier)) activeDrivers.unshift(self);
  renderOrderAssigneeFilter(activeDrivers);
  syncOrderStatusTabs();
  const filteredOrders = getFilteredOrders();
  target.innerHTML = filteredOrders.length ? filteredOrders.map((order) => {
    const cashTotal = getOrderCashTotal(order);
    const activity = Array.isArray(order.activity) ? order.activity : [];
    const nextAction = getNextOrderAction(order);
    const terminal = ["Completed", "Denied", "Canceled"].includes(order.status);
    const orderId = escapeHtml(order.id);
    const customer = escapeHtml(order.customer || "Member");
    const status = escapeHtml(order.status || "Submitted");
    const contact = escapeHtml(`${order.phone || "No phone"} (${order.contactMethod || "Text"})`);
    const delivery = escapeHtml(order.deliveryOption || "Delivery");
    const location = escapeHtml(getOrderLocationSummary(order));
    const placedAt = escapeHtml(formatOrderTime(order.createdAt || activity[0]?.at));
    const itemSummary = escapeHtml(getOrderItemSummary(order));
    const laneLabel = order.accessLane === "guest"
      ? "Guest order"
      : order.memberId || order.accessLane === "approved_member"
        ? "Approved member"
        : "Member code";
    return `
    <article class="order-card">
      <div class="order-info">
        <div class="order-card-head">
          <div>
            <p class="eyebrow">${placedAt}</p>
            <h3>${orderId} - ${customer}</h3>
          </div>
          <span class="tag ${["Denied", "Canceled"].includes(order.status) ? "hot" : ""}">${status}</span>
        </div>
        <section class="order-summary-grid">
          <p><strong>Contact</strong><span>${contact}</span></p>
          <p><strong>Method</strong><span>${delivery}</span></p>
          <p><strong>Area</strong><span>${location}</span></p>
          <p><strong>Total</strong><span>$${cashTotal.toFixed(2)}</span></p>
        </section>
        <p><strong>Access:</strong> ${escapeHtml(laneLabel)}</p>
        <p><strong>Items:</strong> ${itemSummary}</p>
        ${order.assignedTo ? `<p><strong>Assigned:</strong> ${escapeHtml(getMemberLabel(order.assignedTo))}</p>` : ""}
        ${order.deliveryWindow ? `<p><strong>Expected window:</strong> ${escapeHtml(order.deliveryWindow)}</p>` : ""}
        ${getCustomerVisibleMessage(order) ? `<p><strong>Customer update:</strong> ${escapeHtml(getCustomerVisibleMessage(order))}</p>` : ""}
        <details class="order-details">
          <summary>View details</summary>
          <p><strong>Full address:</strong> ${escapeHtml(order.address || "Address unavailable")}</p>
          <p><strong>Customer notes:</strong> ${escapeHtml(order.instructions || "No notes")}</p>
          ${order.items?.length ? `<p><strong>Full items:</strong> ${escapeHtml(order.items.join(", "))}</p>` : ""}
          ${order.promoCode ? `<p><strong>Promo:</strong> ${escapeHtml(order.promoCode)} ${order.promoLabel ? `(${escapeHtml(order.promoLabel)})` : ""}</p>` : ""}
          <p><strong>Totals:</strong> $${Number(order.subtotal || 0).toFixed(2)} subtotal - $${Number(order.discount || 0).toFixed(2)} discounts - $${Number(order.adminDiscount || 0).toFixed(2)} admin discount + $${Number(order.tax || 0).toFixed(2)} tax + $${Number(order.deliveryFee || 0).toFixed(2)} fee</p>
          ${order.adminNote ? `<p><strong>Admin note:</strong> ${escapeHtml(order.adminNote)}</p>` : ""}
        ${activity.length ? `
          <details class="activity-log">
            <summary>Activity</summary>
            ${activity.slice(-4).reverse().map((entry) => `
              <p>${formatOrderTime(entry.at)} - ${escapeHtml(entry.actor || "Team")} ${escapeHtml(entry.action || "updated order")}${entry.note ? `: ${escapeHtml(entry.note)}` : ""}</p>
            `).join("")}
          </details>
        ` : ""}
        ${businessSettings.complianceChecklistEnabled ? `<details class="compliance-checklist">
          <summary>Compliance checklist</summary>
          ${getComplianceItems().map((item) => `
            <label>
              <input type="checkbox" data-compliance="${orderId}" data-compliance-key="${escapeHtml(item.key)}" ${order.compliance?.[item.key] ? "checked" : ""}>
              <span>${escapeHtml(item.label)}</span>
            </label>
          `).join("")}
        </details>` : ""}
        </details>
      </div>
      <div class="order-actions">
        ${nextAction && can("orders") ? `<button class="${escapeHtml(nextAction.style)}" type="button" data-next-order="${orderId}" data-status="${escapeHtml(nextAction.status)}">${escapeHtml(nextAction.label)}</button>` : ""}
        ${!terminal && can("orders") ? `<button class="danger-button" type="button" data-cancel-order="${orderId}">Cancel</button>` : ""}
        <select data-order-assigned="${orderId}" ${can("assignOrders") && !terminal ? "" : "disabled"}>
          <option value="">Unassigned</option>
          ${activeDrivers.map((member) => {
            const identifier = getMemberIdentifier(member);
            return `<option value="${escapeHtml(identifier)}" ${order.assignedTo === identifier ? "selected" : ""}>${escapeHtml(member.name)} - ${escapeHtml(member.title || adminRoleLabels[member.role])}</option>`;
          }).join("")}
        </select>
        <input data-order-window="${orderId}" type="text" placeholder="Expected window" value="${escapeHtml(order.deliveryWindow || "")}" ${terminal ? "disabled" : ""}>
        <input data-order-discount="${orderId}" type="number" min="0" step="1" placeholder="Discount $" value="${Number(order.adminDiscount || 0) || ""}" ${terminal ? "disabled" : ""}>
        <textarea data-order-customer-message="${orderId}" rows="2" placeholder="Customer-visible update or safe denial reason" ${terminal ? "disabled" : ""}>${escapeHtml(getCustomerVisibleMessage(order))}</textarea>
        <textarea data-order-note="${orderId}" rows="2" placeholder="Internal note or cancel reason" ${terminal ? "disabled" : ""}>${escapeHtml(order.adminNote || "")}</textarea>
        ${!terminal && can("orders") ? `<button class="ghost-button" type="button" data-save-order="${orderId}">Save details</button>` : ""}
      </div>
    </article>
  `}).join("") : `<section class="empty-results"><h3>No matching orders</h3><p>Clear filters or choose another status.</p></section>`;

  target.querySelectorAll("[data-save-order]").forEach((button) => {
    button.addEventListener("click", () => {
      const order = merchantOrders.find((item) => item.id === button.dataset.saveOrder);
      updateOrderStatus(button.dataset.saveOrder, order?.status || "Submitted");
    });
  });

  target.querySelectorAll("[data-next-order]").forEach((button) => {
    button.addEventListener("click", () => updateOrderStatus(button.dataset.nextOrder, button.dataset.status));
  });

  target.querySelectorAll("[data-cancel-order]").forEach((button) => {
    button.addEventListener("click", () => updateOrderStatus(button.dataset.cancelOrder, "Canceled"));
  });

  target.querySelectorAll("[data-compliance]").forEach((input) => {
    input.addEventListener("change", () => updateOrderCompliance(input.dataset.compliance, input.dataset.complianceKey, input.checked));
  });

  renderAdminIndicators();
  renderCustomerOrderStatus();
  renderDriverOrders();
}

function getDriverQueue() {
  const role = currentAdminRole();
  const identifier = getMemberIdentifier(currentAdminMember());
  return merchantOrders.filter((order) => {
    const activeStatus = ["Confirmed", "Packed", "Out for delivery"].includes(order.status);
    if (!activeStatus) return false;
    if (accessLevel === "worker" && role === "driver" && identifier) return order.assignedTo === identifier;
    return true;
  });
}

function renderDriverDashboard(driverQueue) {
  if (!driverAssignedCount) return;
  driverAssignedCount.textContent = driverQueue.length;
  driverConfirmedCount.textContent = driverQueue.filter((order) => order.status === "Confirmed").length;
  driverPackedCount.textContent = driverQueue.filter((order) => order.status === "Packed").length;
  driverOutCount.textContent = driverQueue.filter((order) => order.status === "Out for delivery").length;
}

function renderDriverOrders() {
  if (!driverOrders) return;
  const role = currentAdminRole();
  const driverQueue = getDriverQueue();
  renderDriverDashboard(driverQueue);

  if (driverStatusNote) {
    driverStatusNote.textContent = role === "driver"
      ? "Only confirmed, packed, or out-for-delivery orders assigned to you appear here."
      : "Managers and admins see every active delivery here, including work that still needs assignment.";
  }

  driverOrders.innerHTML = driverQueue.length ? driverQueue.map((order) => {
    const orderId = escapeHtml(order.id);
    const status = escapeHtml(order.status);
    const customer = escapeHtml(order.customer || "Member");
    const deliveryWindow = escapeHtml(order.deliveryWindow || "Set by admin");
    const assigned = escapeHtml(order.assignedTo ? getMemberLabel(order.assignedTo) : "Unassigned");
    const address = escapeHtml(order.address || "Address unavailable");
    const phone = escapeHtml(order.phone || "");
    const phoneHref = escapeHtml(sanitizePhoneHref(order.phone || ""));
    const contactMethod = escapeHtml(order.contactMethod || "Text");
    const items = escapeHtml((order.items || []).join(", "));
    const instructions = escapeHtml(order.instructions || "");
    return `
    <article class="driver-card">
      <div>
        <p class="eyebrow">${status}</p>
        <h3>${orderId} - ${customer}</h3>
        <p><strong>Cash:</strong> $${getOrderCashTotal(order).toFixed(2)}</p>
        <p><strong>Window:</strong> ${deliveryWindow}</p>
        <p><strong>Assigned:</strong> ${assigned}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Contact:</strong> ${phone || "No phone"} (${contactMethod})</p>
        <p><strong>Items:</strong> ${items}</p>
        ${order.instructions ? `<p><strong>Notes:</strong> ${instructions}</p>` : ""}
      </div>
      <div class="driver-actions">
        ${phoneHref ? `<a class="ghost-button" href="tel:${phoneHref}">Call</a>` : ""}
        ${phoneHref ? `<a class="ghost-button" href="sms:${phoneHref}">Text</a>` : ""}
        <button class="ghost-button" type="button" data-driver-status="${orderId}" data-status="Packed">Packed</button>
        <button class="primary-button" type="button" data-driver-status="${orderId}" data-status="Out for delivery">Out</button>
        <button class="ghost-button" type="button" data-driver-status="${orderId}" data-status="Completed">Complete</button>
      </div>
    </article>
  `;
  }).join("") : `<section class="empty-results"><h3>No active deliveries</h3><p>Assigned confirmed, packed, or out-for-delivery orders will appear here.</p></section>`;

  driverOrders.querySelectorAll("[data-driver-status]").forEach((button) => {
    button.addEventListener("click", () => updateDriverOrderStatus(button.dataset.driverStatus, button.dataset.status));
  });
}

function renderOrderAssigneeFilter(activeDrivers = []) {
  if (!orderAssigneeFilter) return;
  const currentValue = orderAssigneeFilter.value || orderFilters.assignee;
  const assignedEmails = new Set(merchantOrders.map((order) => order.assignedTo).filter(Boolean));
  activeDrivers.forEach((driver) => assignedEmails.add(getMemberIdentifier(driver)));
  const options = [...assignedEmails].map((identifier) => {
    const member = teamMembers.find((item) => getMemberIdentifier(item) === identifier || item.id === identifier || item.email === identifier);
    return { identifier, label: member ? member.name : identifier };
  });
  orderAssigneeFilter.innerHTML = `
    <option value="all">Everyone</option>
    <option value="unassigned">Unassigned</option>
    ${options.map((item) => `<option value="${escapeHtml(item.identifier)}">${escapeHtml(item.label)}</option>`).join("")}
  `;
  orderAssigneeFilter.value = [...orderAssigneeFilter.options].some((option) => option.value === currentValue) ? currentValue : "all";
  orderFilters.assignee = orderAssigneeFilter.value;
}

function syncOrderStatusTabs() {
  orderStatusTabs.forEach((button) => {
    button.classList.toggle("active", button.dataset.orderStatusTab === orderFilters.status);
  });
}

function getFilteredOrders() {
  const query = orderFilters.query.toLowerCase();
  const groupPriority = { new: 0, active: 1, out: 2, completed: 3, canceled: 4 };
  return merchantOrders.filter((order) => {
    const statusGroup = getAdminStatusGroup(order.status);
    const matchesStatus = orderFilters.status === "all" || statusGroup === orderFilters.status;
    const matchesAssignee =
      orderFilters.assignee === "all" ||
      (orderFilters.assignee === "unassigned" && !order.assignedTo) ||
      order.assignedTo === orderFilters.assignee;
    const searchable = `${order.id} ${order.customer} ${order.phone || ""} ${order.address || ""} ${(order.items || []).join(" ")} ${order.status}`.toLowerCase();
    const matchesQuery = !query || searchable.includes(query);
    return matchesStatus && matchesAssignee && matchesQuery;
  }).sort((a, b) => {
    const priorityDelta = (groupPriority[getAdminStatusGroup(a.status)] ?? 2) - (groupPriority[getAdminStatusGroup(b.status)] ?? 2);
    if (priorityDelta) return priorityDelta;
    return new Date(getOrderTimestamp(b) || b.createdAt || 0) - new Date(getOrderTimestamp(a) || a.createdAt || 0);
  });
}

function renderAdminIndicators() {
  const needsReview = merchantOrders.filter((order) => ["Submitted", "Confirmed"].includes(order.status)).length;
  const activeDelivery = merchantOrders.filter((order) => ["Packed", "Out for delivery"].includes(order.status)).length;
  const unreadMessages = feedbackMessages.filter((message) => message.status === "New").length;
  if (pendingOrderCount) pendingOrderCount.textContent = needsReview;
  if (activeDeliveryCount) activeDeliveryCount.textContent = activeDelivery;
  if (newFeedbackCount) newFeedbackCount.textContent = unreadMessages;
}

function getCustomerActivityText(entry = {}) {
  const action = entry.action || "";
  if (action.includes("Submitted order")) return "Order submitted";
  const statusMatch = action.match(/(?:New|Submitted|Confirmed|Denied|Packed|Out for delivery|Ready for pickup|Completed|Canceled) to (Submitted|Confirmed|Denied|Packed|Out for delivery|Ready for pickup|Completed|Canceled)/);
  if (statusMatch) return `Status changed to ${statusMatch[1]}`;
  const driverMatch = action.match(/moved order to (Submitted|Confirmed|Denied|Packed|Out for delivery|Ready for pickup|Completed|Canceled)/);
  if (driverMatch) return `Status changed to ${driverMatch[1]}`;
  if (action.includes("delivery window updated")) return "Expected delivery window updated";
  if (action.includes("discount set")) return "Order discount updated";
  return "";
}

function renderCustomerActivity(orderOrReceipt) {
  if (!customerActivityFeed) return;
  const entries = (orderOrReceipt?.activity || [])
    .map((entry) => ({ ...entry, customerText: getCustomerActivityText(entry) }))
    .filter((entry) => entry.customerText);

  if (!entries.length) {
    customerActivityFeed.innerHTML = `<p class="fee-note">Live activity will appear here after the order is reviewed.</p>`;
    return;
  }

  customerActivityFeed.innerHTML = entries.slice(-6).reverse().map((entry) => {
    return `
      <article>
        <strong>${escapeHtml(entry.customerText)}</strong>
        <span>${new Date(entry.at).toLocaleString([], { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" })}</span>
      </article>
    `;
  }).join("");
}

function renderCustomerStatusMeta(orderOrReceipt) {
  if (!customerStatusMeta) return;
  if (!orderOrReceipt) {
    customerStatusMeta.innerHTML = "";
    return;
  }

  const status = escapeHtml(getCustomerStatusLabel(orderOrReceipt.status));
  const deliveryWindow = orderOrReceipt.deliveryWindow
    ? escapeHtml(orderOrReceipt.deliveryWindow)
    : "Not set yet";
  const deliveryOption = escapeHtml(orderOrReceipt.deliveryOption || "Fulfillment");
  const updated = escapeHtml(formatOrderTime(getOrderTimestamp(orderOrReceipt)));
  const etaParts = [orderOrReceipt.estimatedDeliveryDate, orderOrReceipt.estimatedDeliveryTime]
    .filter(Boolean)
    .join(" ");
  const eta = etaParts || "";
  customerStatusMeta.innerHTML = `
    <article>
      <span>Status</span>
      <strong>${status}</strong>
    </article>
    <article>
      <span>Expected window</span>
      <strong>${deliveryWindow}</strong>
    </article>
    <article>
      <span>Method</span>
      <strong>${deliveryOption}</strong>
    </article>
    <article>
      <span>Last update</span>
      <strong>${updated}</strong>
    </article>
    ${eta ? `<article>
      <span>ETA</span>
      <strong>${escapeHtml(eta)}</strong>
    </article>` : ""}
  `;
}

function renderCustomerOrderStatus() {
  const latestOrderId = getCustomerTrackedOrder();
  const order = accessLevel === "customer"
    ? null
    : merchantOrders.find((item) => item.id === latestOrderId);
  const receipt = accessLevel === "customer"
    ? getAllowedCustomerReceipt(latestOrderId)
    : customerReceipts.find((item) => item.id === latestOrderId);
  const hasBackend = backendConfigured();
  const liveCopy = hasBackend
    ? `Connected. Auto-checking every ${Math.round(customerOrderRefreshMs / 1000)} seconds when this app is open.`
    : "Order number ready for lookup. Live updates connect when available.";
  if (!customerStatusPanel || !order) {
    if (customerStatusPanel && receipt) {
      customerStatusPanel.hidden = false;
      customerStatusTitle.textContent = `${receipt.id} - ${getCustomerStatusLabel(receipt.status)}`;
      customerStatusBody.textContent = getFulfillmentMessage(receipt);
      if (customerLiveStatus) customerLiveStatus.textContent = `${liveCopy} Updated ${formatOrderTime(getOrderTimestamp(receipt))}.`;
      customerStatusTimeline.innerHTML = `<li class="active"><span></span>${escapeHtml(getCustomerStatusLabel(receipt.status))}</li>`;
      renderCustomerStatusMeta(receipt);
      renderCustomerActivity(receipt);
    } else if (customerStatusPanel) {
      customerStatusPanel.hidden = true;
      if (customerLiveStatus) customerLiveStatus.textContent = "Enter an exact order number to view updates.";
      if (customerStatusTimeline) customerStatusTimeline.innerHTML = "";
      if (customerActivityFeed) customerActivityFeed.innerHTML = "";
      renderCustomerStatusMeta(null);
    }
    return;
  }

  customerStatusPanel.hidden = false;
  customerStatusTitle.textContent = `${order.id} - ${getCustomerStatusLabel(order.status)}`;
  customerStatusBody.textContent = getFulfillmentMessage(order);
  if (customerLiveStatus) customerLiveStatus.textContent = `${liveCopy} Updated ${formatOrderTime(getOrderTimestamp(order))}.`;
  customerStatusTimeline.innerHTML = `<li class="active"><span></span>${escapeHtml(getCustomerStatusLabel(order.status))}</li>`;
  renderCustomerStatusMeta(order);
  renderCustomerActivity(order);
}

function renderCustomerReceipts() {
  if (!customerReceiptList) return;
  if (customerAccessType !== "member") {
    customerReceiptList.hidden = true;
    customerReceiptList.innerHTML = "";
    return;
  }

  customerReceiptList.hidden = false;
  const receipts = getVisibleMemberReceipts();
  if (!receipts.length) {
    customerReceiptList.innerHTML = `
      <div class="receipt-heading">
        <p class="eyebrow">Recent Receipts</p>
        <h3>Completed member orders</h3>
      </div>
      <p class="fee-note">Completed receipts tied to this member code will appear here.</p>
    `;
    return;
  }

  customerReceiptList.innerHTML = `
    <div class="receipt-heading">
      <p class="eyebrow">Recent Receipts</p>
      <h3>Completed member orders</h3>
    </div>
    ${receipts.map((receipt) => {
    const id = escapeHtml(receipt.id || "");
    const status = escapeHtml(getCustomerStatusLabel(receipt.status));
    const updated = escapeHtml(formatOrderTime(getOrderTimestamp(receipt)));
    const total = Number(receipt.total || 0).toFixed(2);
    const windowText = receipt.deliveryWindow
      ? `<p>Expected window: ${escapeHtml(receipt.deliveryWindow)}</p>`
      : "";
    return `
      <article class="receipt-card">
        <div>
          <strong>${id}</strong>
          <span>${status} - ${updated}</span>
          <p>${escapeHtml(getFulfillmentMessage(receipt))}</p>
          <p>Total: $${total}</p>
          ${windowText}
        </div>
        <button class="ghost-button" type="button" data-member-receipt="${id}">Track</button>
      </article>
    `;
  }).join("")}`;
  customerReceiptList.querySelectorAll("[data-member-receipt]").forEach((button) => {
    button.addEventListener("click", () => {
      setCustomerTrackedOrder(button.dataset.memberReceipt);
      renderCustomerOrderStatus();
    });
  });
}

function renderFeedbackInbox() {
  if (!feedbackInbox) return;
  feedbackInbox.innerHTML = feedbackMessages.length ? feedbackMessages.map((message) => {
    const id = escapeHtml(message.id);
    const name = escapeHtml(message.name || "Member");
    const phone = escapeHtml(message.phone || "");
    const status = escapeHtml(message.status || "New");
    const text = escapeHtml(message.message || "");
    const adminNote = escapeHtml(message.adminNote || "");
    return `
    <article class="feedback-card">
      <div>
        <h3>${name}</h3>
        <p><strong>${phone}</strong> - ${status}</p>
        <p>${text}</p>
        ${message.adminNote ? `<p><strong>Note:</strong> ${adminNote}</p>` : ""}
      </div>
      <div class="catalog-actions">
        <button class="ghost-button" type="button" data-feedback-status="${id}" data-status="Contacted">Contacted</button>
        <button class="ghost-button" type="button" data-feedback-status="${id}" data-status="Closed">Closed</button>
      </div>
    </article>
  `;
  }).join("") : `<section class="empty-results"><h3>No member messages yet</h3><p>Feedback and callback requests will appear here.</p></section>`;

  feedbackInbox.querySelectorAll("[data-feedback-status]").forEach((button) => {
    button.addEventListener("click", () => updateFeedbackStatus(button.dataset.feedbackStatus, button.dataset.status));
  });
  renderAdminIndicators();
}

function updateOrderStatus(orderId, status) {
  if (!can("orders")) return;
  const noteInput = document.querySelector(`[data-order-note="${orderId}"]`);
  const customerMessageInput = document.querySelector(`[data-order-customer-message="${orderId}"]`);
  const windowInput = document.querySelector(`[data-order-window="${orderId}"]`);
  const discountInput = document.querySelector(`[data-order-discount="${orderId}"]`);
  const assignedInput = document.querySelector(`[data-order-assigned="${orderId}"]`);
  const actor = currentAdminMember() || { name: "Admin", role: "owner" };
  merchantOrders = merchantOrders.map((order) => {
    if (order.id !== orderId) return order;
    const adminDiscount = Math.max(0, Number(discountInput?.value || 0));
    const note = noteInput?.value.trim() || (status === "Denied" ? "No reason provided." : "Updated by admin.");
    if (["Denied", "Canceled"].includes(status) && !noteInput?.value.trim()) {
      noteInput.placeholder = "Reason required for denied/canceled orders";
      noteInput.focus();
      return order;
    }
    const assignedTo = can("assignOrders") ? (assignedInput?.value || order.assignedTo || "") : (order.assignedTo || "");
    const customerMessage = customerMessageInput?.value.trim() || "";
    const activity = [...(order.activity || [])];
    const changes = [];
    if (order.status !== status) changes.push(`${order.status || "New"} to ${status}`);
    if ((order.assignedTo || "") !== assignedTo) changes.push(`assigned to ${assignedTo || "unassigned"}`);
    if ((order.deliveryWindow || "") !== (windowInput?.value.trim() || order.deliveryWindow || "")) changes.push("delivery window updated");
    if (getCustomerVisibleMessage(order) !== customerMessage) changes.push("customer update changed");
    if (Number(order.adminDiscount || 0) !== adminDiscount) changes.push(`discount set to $${adminDiscount.toFixed(2)}`);
    activity.push({
      at: new Date().toISOString(),
      actor: actor.name || actor.email || "Admin",
      role: actor.role || "owner",
      action: changes.length ? `updated ${changes.join(", ")}` : `saved ${status}`,
      note
    });
    return {
      ...order,
      status,
      assignedTo,
      deliveryWindow: windowInput?.value.trim() || order.deliveryWindow || "",
      customerMessage,
      customerVisibleMessage: customerMessage,
      deniedReasonCustomer: ["Denied", "Canceled"].includes(status) ? customerMessage : order.deniedReasonCustomer || "",
      completedAt: status === "Completed" ? new Date().toISOString() : order.completedAt || "",
      compliance: order.compliance || {},
      adminDiscount,
      total: getOrderCashTotal({ ...order, adminDiscount }),
      adminNote: note,
      activity: activity.slice(-30)
    };
  });
  saveOrders();
  renderOrders();
}

function updateOrderCompliance(orderId, key, checked) {
  const actor = currentAdminMember() || { name: "Admin", role: "owner" };
  const item = complianceItems.find((entry) => entry.key === key);
  merchantOrders = merchantOrders.map((order) => {
    if (order.id !== orderId) return order;
    const compliance = { ...(order.compliance || {}), [key]: checked };
    const activity = [...(order.activity || []), {
      at: new Date().toISOString(),
      actor: actor.name || actor.email || "Admin",
      role: actor.role || "owner",
      action: `${checked ? "checked" : "unchecked"} ${item?.label || key}`,
      note: ""
    }];
    return { ...order, compliance, activity: activity.slice(-30) };
  });
  saveOrders();
  renderOrders();
}

function updateDriverOrderStatus(orderId, status) {
  if (!can("driverBoard")) return;
  const actor = currentAdminMember() || { name: "Driver", role: "driver" };
  merchantOrders = merchantOrders.map((order) => {
    if (order.id !== orderId) return order;
    const compliance = { ...(order.compliance || {}) };
    if (status === "Packed") compliance.packed = true;
    if (status === "Out for delivery") compliance.handoff = true;
    const activity = [...(order.activity || []), {
      at: new Date().toISOString(),
      actor: actor.name || actor.email || "Driver",
      role: actor.role || "driver",
      action: `moved order to ${status}`,
      note: ""
    }];
    return {
      ...order,
      status,
      completedAt: status === "Completed" ? new Date().toISOString() : order.completedAt || "",
      compliance,
      activity: activity.slice(-30)
    };
  });
  saveOrders();
  renderOrders();
}

function updateFeedbackStatus(id, status) {
  feedbackMessages = feedbackMessages.map((message) => message.id === id ? {
    ...message,
    status,
    updatedAt: new Date().toISOString()
  } : message);
  saveFeedbackMessages();
  renderFeedbackInbox();
  if (backendReady()) {
    const message = feedbackMessages.find((item) => item.id === id);
    if (message) window.SutterBackend.updateFeedback(message).catch((error) => setBackendStatus(`Feedback update failed: ${error.message}`));
  }
}

function resetMemberAdminForm() {
  if (!memberAdminForm) return;
  editingMemberId = "";
  memberAdminForm.reset();
  if (editingMemberIdInput) editingMemberIdInput.value = "";
  if (adminMemberStatusInput) adminMemberStatusInput.value = "pending";
  if (adminMemberSubmitButton) adminMemberSubmitButton.textContent = "Save member";
  if (cancelMemberEditButton) cancelMemberEditButton.hidden = true;
}

function getMemberStatusLabel(status = "pending") {
  return {
    pending: "Pending",
    approved: "Approved",
    denied: "Denied",
    disabled: "Disabled"
  }[status] || "Pending";
}

function upsertMemberRecord(member) {
  const normalized = normalizeMemberRecord(member);
  memberRecords = [
    normalized,
    ...memberRecords.filter((item) => item.id !== normalized.id)
  ];
  saveMemberRecords();
  return normalized;
}

function updateMemberStatus(memberId, status) {
  if (!can("accessCodes")) return;
  memberRecords = memberRecords.map((member) => {
    if (member.id !== memberId) return member;
    const approvedAt = status === "approved" && !member.approvedAt ? new Date().toISOString() : member.approvedAt;
    const code = status === "approved" && !member.code ? generateShortCode("MBR") : member.code;
    return { ...member, status, approvedAt, code };
  });
  saveMemberRecords();
}

function resetMemberCode(memberId) {
  if (!can("accessCodes")) return;
  memberRecords = memberRecords.map((member) => member.id === memberId
    ? { ...member, code: generateShortCode("MBR") }
    : member);
  saveMemberRecords();
}

function editMemberRecord(memberId) {
  const member = memberRecords.find((item) => item.id === memberId);
  if (!member || !memberAdminForm) return;
  editingMemberId = member.id;
  editingMemberIdInput.value = member.id;
  adminMemberNameInput.value = member.name;
  adminMemberPhoneInput.value = member.phone;
  adminMemberEmailInput.value = member.email;
  adminMemberCodeInput.value = member.code;
  adminMemberStatusInput.value = member.status;
  adminMemberNotesInput.value = member.notes || "";
  adminMemberSubmitButton.textContent = "Update member";
  cancelMemberEditButton.hidden = false;
  memberAdminForm.scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderMemberAdminList() {
  if (!memberAdminList) return;
  const sorted = [...memberRecords].sort((a, b) => {
    const statusWeight = { pending: 0, approved: 1, disabled: 2, denied: 3 };
    return (statusWeight[a.status] ?? 9) - (statusWeight[b.status] ?? 9)
      || new Date(b.createdAt || 0) - new Date(a.createdAt || 0);
  });

  memberAdminList.innerHTML = sorted.length ? sorted.map((member) => {
    const id = escapeHtml(member.id);
    const name = escapeHtml(member.name || "Member request");
    const phone = escapeHtml(member.phone || "No phone");
    const email = escapeHtml(member.email || "No email");
    const status = escapeHtml(getMemberStatusLabel(member.status));
    const code = escapeHtml(member.code || "Not assigned");
    const notes = escapeHtml(member.notes || "No notes");
    const created = escapeHtml(formatOrderTime(member.createdAt));
    const approved = member.approvedAt ? escapeHtml(formatOrderTime(member.approvedAt)) : "Not approved";
    const lastOrder = member.lastOrderAt ? escapeHtml(formatOrderTime(member.lastOrderAt)) : "No orders yet";
    return `
    <article class="team-card member-card">
      <div>
        <h3>${name}</h3>
        <p>${phone} - ${email}</p>
        <p><strong>Status:</strong> ${status}</p>
        <p><strong>Member code:</strong> ${code}</p>
        <p><strong>Created:</strong> ${created} | <strong>Approved:</strong> ${approved}</p>
        <p><strong>Last order:</strong> ${lastOrder}</p>
        <p><strong>Notes:</strong> ${notes}</p>
      </div>
      <div class="catalog-actions">
        <button class="ghost-button" type="button" data-edit-member="${id}">Edit</button>
        ${member.status !== "approved" ? `<button class="primary-button" type="button" data-member-status="${id}" data-status="approved">Approve</button>` : ""}
        ${member.status === "approved" ? `<button class="ghost-button" type="button" data-reset-member-code="${id}">Reset code</button>` : ""}
        ${member.status === "approved" ? `<button class="danger-button" type="button" data-member-status="${id}" data-status="disabled">Disable</button>` : ""}
        ${member.status === "disabled" ? `<button class="primary-button" type="button" data-member-status="${id}" data-status="approved">Reactivate</button>` : ""}
        ${member.status === "pending" ? `<button class="danger-button" type="button" data-member-status="${id}" data-status="denied">Deny</button>` : ""}
      </div>
    </article>
  `;
  }).join("") : `<section class="empty-results"><h3>No member requests yet</h3><p>Guest access requests will appear here for approval.</p></section>`;

  memberAdminList.querySelectorAll("[data-edit-member]").forEach((button) => {
    button.addEventListener("click", () => editMemberRecord(button.dataset.editMember));
  });
  memberAdminList.querySelectorAll("[data-member-status]").forEach((button) => {
    button.addEventListener("click", () => updateMemberStatus(button.dataset.memberStatus, button.dataset.status));
  });
  memberAdminList.querySelectorAll("[data-reset-member-code]").forEach((button) => {
    button.addEventListener("click", () => resetMemberCode(button.dataset.resetMemberCode));
  });
}

function getSelectedTeamPermissions() {
  return [...teamPermissionInputs]
    .filter((input) => input.checked)
    .map((input) => input.dataset.teamPermission);
}

function setTeamPermissionInputs(permissions = []) {
  teamPermissionInputs.forEach((input) => {
    input.checked = permissions.includes(input.dataset.teamPermission);
  });
}

function resetTeamMemberForm() {
  editingTeamMemberId = "";
  teamMemberForm.reset();
  teamMemberActiveInput.checked = true;
  setTeamPermissionInputs(getWorkerDefaultPermissions(teamMemberRoleInput.value));
  teamMemberSubmitButton.textContent = "Save worker";
  cancelTeamEditButton.hidden = true;
}

function renderTeamMembers() {
  if (!teamMemberList) return;
  const currentIdentifier = getMemberIdentifier(currentAdminMember());
  teamMemberList.innerHTML = teamMembers.length ? teamMembers.map((member) => {
    const memberId = escapeHtml(member.id);
    const name = escapeHtml(member.name);
    const title = escapeHtml(member.title || adminRoleLabels[member.role]);
    const email = escapeHtml(member.email || "");
    const roleLabel = escapeHtml(adminRoleLabels[member.role]);
    const passcode = escapeHtml(member.passcode || "Not set");
    const access = escapeHtml((member.permissions || []).map((permission) => ({
      orders: "Orders",
      driverBoard: "Driver",
      assignOrders: "Assign",
      editMenu: "Menu",
      promo: "Promo",
      coreDesign: "Design",
      delivery: "Delivery",
      backend: "Backend"
    }[permission] || permission)).join(", ") || "No worker access");
    return `
    <article class="team-card">
      <div>
        <h3>${name}</h3>
        <p>${title}${member.email ? ` - ${email}` : ""}</p>
        <p>${roleLabel} ${member.active ? "- active" : "- paused"}${getMemberIdentifier(member) === currentIdentifier ? " - this device" : ""}</p>
        <p><strong>Worker code:</strong> ${passcode}</p>
        <p><strong>Access:</strong> ${access}</p>
      </div>
      <div class="catalog-actions">
        <button class="ghost-button" type="button" data-edit-team="${memberId}" ${can("team") ? "" : "disabled"}>Edit</button>
        <button class="danger-button" type="button" data-remove-team="${memberId}" ${can("team") ? "" : "disabled"}>Remove</button>
      </div>
    </article>
  `;
  }).join("") : `<section class="empty-results"><h3>No team saved yet</h3><p>The first signed-in admin is treated as Admin until you add team members.</p></section>`;

  teamMemberList.querySelectorAll("[data-edit-team]").forEach((button) => {
    button.addEventListener("click", () => {
      const member = teamMembers.find((item) => item.id === button.dataset.editTeam);
      if (!member) return;
      editingTeamMemberId = member.id;
      teamMemberNameInput.value = member.name;
      teamMemberTitleInput.value = member.title || "";
      teamMemberEmailInput.value = member.email;
      teamMemberPasscodeInput.value = member.passcode || "";
      teamMemberRoleInput.value = member.role;
      teamMemberActiveInput.checked = member.active;
      setTeamPermissionInputs(member.permissions || getWorkerDefaultPermissions(member.role));
      teamMemberSubmitButton.textContent = "Update worker";
      cancelTeamEditButton.hidden = false;
      teamMemberForm.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  teamMemberList.querySelectorAll("[data-remove-team]").forEach((button) => {
    button.addEventListener("click", () => {
      if (!can("team")) return;
      teamMembers = teamMembers.filter((member) => member.id !== button.dataset.removeTeam);
      saveTeamMembers();
    });
  });
}

function renderCatalog() {
  renderCatalogWorkbench();
  renderInventoryDashboard();
  const filteredCatalog = catalog.filter((item) => {
    const query = adminCatalogFilters.query.toLowerCase();
    const matchesQuery = !query || `${item.name} ${item.category} ${item.subcategory || ""} ${item.brand || ""} ${item.tags || ""}`.toLowerCase().includes(query);
    const matchesCategory = adminCatalogFilters.category === "all" || getCategoryKey(item.category) === adminCatalogFilters.category;
    const matchesSubcategory = adminCatalogFilters.subcategory === "all" || (item.subcategory || "").toLowerCase() === adminCatalogFilters.subcategory;
    const matchesBrand = adminCatalogFilters.brand === "all" || (item.brand || "").toLowerCase() === adminCatalogFilters.brand;
    const matchesStatus =
      adminCatalogFilters.status === "all" ||
      (adminCatalogFilters.status === "live" && item.active && Number(item.stock || 0) > 0) ||
      (adminCatalogFilters.status === "lowstock" && item.active && Number(item.stock || 0) > 0 && Number(item.stock || 0) <= lowStockThreshold) ||
      (adminCatalogFilters.status === "paused" && !item.active) ||
      (adminCatalogFilters.status === "soldout" && Number(item.stock || 0) <= 0);
    return matchesQuery && matchesCategory && matchesSubcategory && matchesBrand && matchesStatus;
  });

  catalogList.innerHTML = filteredCatalog.length ? filteredCatalog.map((item) => {
    const id = escapeHtml(item.id);
    const name = escapeHtml(item.name);
    const image = escapeHtml(item.image || defaultProductImage);
    const category = escapeHtml(item.category || "Product");
    const subcategory = escapeHtml(item.subcategory || "");
    const brand = escapeHtml(item.brand || "");
    const description = escapeHtml(item.description || "No description yet.");
    const tags = escapeHtml(item.tags || "");
    return `
    <article class="catalog-card">
      <img class="catalog-thumb" src="${image}" alt="${name}">
      <div class="catalog-info">
        <h3>${name}</h3>
        <p>$${item.price.toFixed(2)} base - ${category}${item.subcategory ? ` / ${subcategory}` : ""}${item.brand ? ` / ${brand}` : ""}</p>
        <p>${description}</p>
        ${item.variants?.length ? `<p><strong>Options:</strong> ${item.variants.map((variant) => `${escapeHtml(variant.label)} $${Number(variant.price).toFixed(2)}`).join(", ")}</p>` : ""}
        <p><strong>Stock:</strong> ${Number(item.stock || 0)} ${Number(item.stock || 0) <= 0 ? "- sold out" : ""}</p>
        <p><strong>Limit:</strong> ${Number(item.limit || 0) > 0 ? `${item.limit} per customer` : "No daily limit set"}</p>
        ${item.tags ? `<p><strong>Tags:</strong> ${tags}</p>` : ""}
      </div>
      <div class="catalog-actions">
        <span class="tag ${item.active ? "" : "hot"}">${item.active ? "Live" : "Paused"}</span>
        <button class="ghost-button" type="button" data-edit-item="${id}">Edit</button>
        <button class="ghost-button" type="button" data-toggle-item="${id}">
          ${item.active ? "Pause" : "Live"}
        </button>
        <button class="ghost-button" type="button" data-restock-item="${id}">+5 stock</button>
        <button class="ghost-button" type="button" data-soldout-item="${id}">Mark sold out</button>
        <button class="danger-button" type="button" data-delete-item="${id}" ${can("deleteProducts") ? "" : "disabled"}>Remove</button>
      </div>
    </article>
  `;
  }).join("") : `<section class="empty-results"><h3>No matching products</h3><p>Clear filters or add a new menu item.</p></section>`;

  catalogList.querySelectorAll("[data-toggle-item]").forEach((button) => {
    button.addEventListener("click", () => {
      catalog = catalog.map((item) => {
        if (item.id !== button.dataset.toggleItem) return item;
        return { ...item, active: !item.active };
      });
      saveCatalog();
      renderCatalog();
      renderMerchants();
    });
  });

  catalogList.querySelectorAll("[data-restock-item]").forEach((button) => {
    button.addEventListener("click", () => {
      catalog = catalog.map((item) => {
        if (item.id !== button.dataset.restockItem) return item;
        return { ...item, stock: Number(item.stock || 0) + 5, active: true };
      });
      saveCatalog();
      renderCatalog();
      renderMerchants();
    });
  });

  catalogList.querySelectorAll("[data-soldout-item]").forEach((button) => {
    button.addEventListener("click", () => {
      catalog = catalog.map((item) => {
        if (item.id !== button.dataset.soldoutItem) return item;
        return { ...item, stock: 0 };
      });
      saveCatalog();
      renderCatalog();
      renderMerchants();
    });
  });

  catalogList.querySelectorAll("[data-edit-item]").forEach((button) => {
    button.addEventListener("click", () => {
      const item = catalog.find((catalogItem) => catalogItem.id === button.dataset.editItem);
      if (!item) return;

      editingItemId = item.id;
      pendingImageData = "";
      itemNameInput.value = item.name;
      itemPriceInput.value = item.price;
      itemVariantsInput.value = formatVariants(item.variants || []);
      itemDescriptionInput.value = item.description || "";
      itemCategoryInput.value = item.category;
      itemSubcategoryInput.value = item.subcategory || "";
      itemBrandInput.value = item.brand || "";
      itemStockInput.value = item.stock || 0;
      itemLimitInput.value = item.limit || "";
      itemTagsInput.value = item.tags || "";
      itemImageUrlInput.value = item.image || "";
      itemImageFileInput.value = "";
      catalogSubmitButton.textContent = "Save item";
      cancelEditButton.hidden = false;
      catalogForm.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  catalogList.querySelectorAll("[data-delete-item]").forEach((button) => {
    button.addEventListener("click", () => {
      if (!can("deleteProducts")) return;
      catalog = catalog.filter((item) => item.id !== button.dataset.deleteItem);
      saveCatalog();
      renderCatalog();
      renderMerchants();
    });
  });
}

modeButtons.forEach((button) => {
  button.addEventListener("click", () => setMode(button.dataset.mode));
});

roleButtons.forEach((button) => {
  button.addEventListener("click", () => setRole(button.dataset.role));
});

customerPageButtons.forEach((button) => {
  button.addEventListener("click", () => setCustomerPage(button.dataset.customerNav));
});

searchInput.addEventListener("input", () => {
  if (activeCustomerPage !== "catalog") setCustomerPage("catalog", { scroll: false });
  renderMerchants();
});

homeSearchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  searchInput.value = homeSearchInput.value.trim();
  activeFilter = "all";
  activeSubcategory = "all";
  activeBrand = "all";
  activePriceRange = "all";
  priceRangeFilter.value = "all";
  setCustomerPage("catalog");
  renderCategoryControls();
  renderBrowseControls();
  renderMerchants();
});

homeMemberAccessButton.addEventListener("click", () => setCustomerPage("member"));
homeTrackOrderButton.addEventListener("click", () => setCustomerPage("order"));
homeCategoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    searchInput.value = "";
    activeFilter = button.dataset.homeCategory || "all";
    activeSubcategory = "all";
    activeBrand = "all";
    activePriceRange = "all";
    priceRangeFilter.value = "all";
    setCustomerPage("catalog");
    renderCategoryControls();
    renderBrowseControls();
    renderMerchants();
  });
});

priceRangeFilter.addEventListener("change", () => {
  activePriceRange = priceRangeFilter.value;
  renderMerchants();
});

clearBrowseFilters.addEventListener("click", () => {
  activeFilter = "all";
  activeSubcategory = "all";
  activeBrand = "all";
  activePriceRange = "all";
  searchInput.value = "";
  renderCategoryControls();
  renderBrowseControls();
  renderMerchants();
});

function focusCatalogSection(options = {}) {
  if (options.query !== undefined) searchInput.value = options.query;
  if (options.category) {
    activeFilter = options.category;
    activeSubcategory = "all";
    activeBrand = "all";
    activePriceRange = "all";
    priceRangeFilter.value = "all";
  }
  if (activeRole !== "customer") setRole("customer");
  setCustomerPage("catalog");
  renderCategoryControls();
  renderBrowseControls();
  renderMerchants();
  requestAnimationFrame(() => {
    merchantList?.scrollIntoView({ behavior: "smooth", block: "start" });
    const firstCatalogAction = merchantList?.querySelector("[data-add-product]:not(:disabled), .variant-select");
    firstCatalogAction?.focus({ preventScroll: true });
  });
}

document.getElementById("quickAddButton").addEventListener("click", () => {
  focusCatalogSection();
});

document.getElementById("promoButton").addEventListener("click", () => {
  focusCatalogSection();
});

document.getElementById("checkoutButton").addEventListener("click", () => {
  setCustomerPage("cart");
});

cartPageBrowseButton.addEventListener("click", () => setCustomerPage("catalog"));

cartPageCheckoutButton.addEventListener("click", () => {
  if (cart.length) placeOrder();
});

[adminCategoryFilter, adminSubcategoryFilter, adminBrandFilter, adminStatusFilter].forEach((select) => {
  select.addEventListener("change", () => {
    adminCatalogFilters = {
      ...adminCatalogFilters,
      category: adminCategoryFilter.value,
      subcategory: adminSubcategoryFilter.value,
      brand: adminBrandFilter.value,
      status: adminStatusFilter.value
    };
    renderCatalog();
  });
});

adminCatalogSearch.addEventListener("input", () => {
  adminCatalogFilters = { ...adminCatalogFilters, query: adminCatalogSearch.value.trim() };
  renderCatalog();
});

orderSearchInput.addEventListener("input", () => {
  orderFilters = { ...orderFilters, query: orderSearchInput.value.trim() };
  renderOrders();
});

orderStatusFilter.addEventListener("change", () => {
  orderFilters = { ...orderFilters, status: orderStatusFilter.value };
  syncOrderStatusTabs();
  renderOrders();
});

orderStatusTabs.forEach((button) => {
  button.addEventListener("click", () => {
    orderFilters = { ...orderFilters, status: button.dataset.orderStatusTab };
    orderStatusFilter.value = orderFilters.status;
    syncOrderStatusTabs();
    renderOrders();
  });
});

orderAssigneeFilter.addEventListener("change", () => {
  orderFilters = { ...orderFilters, assignee: orderAssigneeFilter.value };
  renderOrders();
});

clearOrderFilters.addEventListener("click", () => {
  orderFilters = { query: "", status: "all", assignee: "all" };
  orderSearchInput.value = "";
  orderStatusFilter.value = "all";
  orderAssigneeFilter.value = "all";
  syncOrderStatusTabs();
  renderOrders();
});

clearCatalogFilters.addEventListener("click", () => {
  adminCatalogFilters = { query: "", category: "all", subcategory: "all", brand: "all", status: "all" };
  renderCatalog();
});

checkoutForm.addEventListener("submit", (event) => {
  event.preventDefault();
  submitOrderRequest();
});

orderLookupForm.addEventListener("submit", (event) => {
  event.preventDefault();
  lookupCustomerOrder(lookupOrderInput.value, lookupPhoneInput.value);
});

refreshCustomerOrderButton.addEventListener("click", () => {
  refreshLatestCustomerOrder(false);
});

memberEmailForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = memberNameInput.value.trim();
  const phone = memberPhoneInput.value.trim();
  const email = normalizeEmail(memberEmailInput.value);
  memberProfile = name || phone || email
    ? { ...memberProfile, name, phone, email, linkedAt: new Date().toISOString() }
    : { name: "", phone: "", email: "", linkedAt: "" };
  saveMemberProfile();
});

memberRequestForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const request = normalizeMemberRecord({
    id: `request-${Date.now()}`,
    name: requestMemberNameInput.value.trim(),
    phone: requestMemberPhoneInput.value.trim(),
    email: normalizeEmail(requestMemberEmailInput.value),
    contactMethod: requestMemberContactInput.value || "Text",
    notes: requestMemberNotesInput.value.trim(),
    status: "pending",
    createdAt: new Date().toISOString()
  });
  if (!request.name || !request.phone) return;
  memberRecords = [request, ...memberRecords.filter((member) => member.id !== request.id)];
  localStorage.setItem("sutterButtesMemberRecords", JSON.stringify(memberRecords));
  renderMemberAdminList();
  renderAccessSummary();
  memberProfile = {
    ...memberProfile,
    memberId: request.id,
    memberCode: "",
    memberStatus: request.status,
    name: request.name,
    phone: request.phone,
    email: request.email || memberProfile.email,
    linkedAt: new Date().toISOString()
  };
  saveMemberProfile();
  memberRequestStatus.textContent = "Member access request submitted. The team will review your request.";
  memberRequestForm.reset();
  if (backendConfigured()) {
    try {
      await window.SutterBackend.submitMemberRequest(request);
      memberRequestStatus.textContent = "Member access request submitted. The team will review your request.";
    } catch (error) {
      memberRequestStatus.textContent = "Member request saved on this device. Shared review is unavailable right now.";
      console.warn("Member request sync failed", error);
    }
  }
});

feedbackForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const message = {
    id: `local-${Date.now()}`,
    name: feedbackNameInput.value.trim(),
    phone: feedbackPhoneInput.value.trim(),
    message: feedbackMessageInput.value.trim(),
    status: "New",
    adminNote: "",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  if (!message.name || !message.phone || !message.message) return;
  feedbackMessages = [message, ...feedbackMessages];
  saveFeedbackMessages();
  renderFeedbackInbox();
  submitFeedbackToBackend(message);
  sendFeedbackEmailAlert(message);
  feedbackForm.reset();
  feedbackStatus.textContent = "Message sent. We will get back to you by text or call.";
});

document.getElementById("closeCheckoutButton").addEventListener("click", () => {
  checkoutPanel.hidden = true;
});

closeConfirmationButton.addEventListener("click", () => {
  confirmationPanel.hidden = true;
  clearCustomerTrackedOrder();
  setCustomerPage("catalog");
});

trackReceiptButton.addEventListener("click", () => {
  confirmationPanel.hidden = true;
  setCustomerPage("order");
  lookupCustomerOrder(confirmationOrderNumber.textContent || lookupOrderInput.value || "", "");
  document.querySelector(".order-recovery-panel")?.scrollIntoView({ behavior: "smooth", block: "start" });
});

document.getElementById("enableNotificationsButton").addEventListener("click", async () => {
  if (!("Notification" in window)) {
    adminAlert.hidden = false;
    adminAlertTitle.textContent = "Browser alerts unavailable";
    adminAlertBody.textContent = "This browser does not support notifications.";
    return;
  }

  const permission = await Notification.requestPermission();
  adminAlert.hidden = false;
  adminAlertTitle.textContent = permission === "granted" ? "Alerts enabled" : "Alerts not enabled";
  adminAlertBody.textContent = permission === "granted"
    ? "Admins will get browser notifications for new orders and important status changes while this app is open."
    : "Browser notification permission was not granted.";
});

refreshFeedbackButton.addEventListener("click", () => {
  loadFeedbackFromBackend(false);
});

refreshOrdersButton.addEventListener("click", () => {
  refreshOrdersFromBackend(false);
});

refreshDriverButton.addEventListener("click", () => {
  refreshOrdersFromBackend(false);
  renderDriverOrders();
});

document.getElementById("locationButton").addEventListener("click", () => {
  if (accessLevel === "admin" && canOpenMode("frontpage")) setMode("frontpage");
});

accessForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const submittedCode = normalizeAccessCode(accessCodeInput.value);

  if (submittedCode === normalizeAccessCode(accessCodes.admin)) {
    unlockApp("admin");
    return;
  }

  const worker = teamMembers.find((member) => member.active && member.passcode && member.passcode === submittedCode);
  if (worker) {
    unlockApp("worker", worker.id);
    return;
  }

  if (businessSettings.weeklyGuestCodeEnabled && submittedCode === normalizeAccessCode(accessCodes.guest?.code || "")) {
    unlockApp("customer", "", { customerAccessType: "guest" });
    return;
  }

  if (businessSettings.approvedMemberCodesEnabled) {
    accessError.textContent = "Checking member code...";
    const member = await findApprovedMemberByCode(submittedCode);
    if (member) {
      unlockApp("customer", "", { customerAccessType: "member", memberId: member.id, member });
      return;
    }
  }

  accessError.textContent = "Access code not recognized.";
});

itemImageFileInput.addEventListener("change", async () => {
  const file = itemImageFileInput.files[0];
  pendingImageFile = file || null;
  pendingImageData = file ? await readUploadedImage(file) : "";
  if (pendingImageData) itemImageUrlInput.value = "";
});

promoInputs.logoFile.addEventListener("change", async () => {
  const file = promoInputs.logoFile.files[0];
  pendingLogoFile = file || null;
  pendingLogoData = file ? await readUploadedImage(file) : "";
  if (pendingLogoData) promoInputs.logoImage.value = "";
});

promoInputs.heroFile.addEventListener("change", async () => {
  const file = promoInputs.heroFile.files[0];
  pendingHeroFile = file || null;
  pendingHeroData = file ? await readUploadedImage(file) : "";
  if (pendingHeroData) promoInputs.heroImage.value = "";
});

frontPageInputs.heroImagesFile.addEventListener("change", async () => {
  pendingHeroImageFiles = [...frontPageInputs.heroImagesFile.files];
  pendingHeroImagesData = frontPageInputs.heroImagesFile.files.length
    ? await readUploadedImages(frontPageInputs.heroImagesFile.files)
    : [];
  if (pendingHeroImagesData.length) frontPageInputs.heroImages.value = "";
});

promoInputs.promoImagesFile.addEventListener("change", async () => {
  pendingPromoImageFiles = [...promoInputs.promoImagesFile.files];
  pendingPromoImagesData = promoInputs.promoImagesFile.files.length
    ? await readUploadedImages(promoInputs.promoImagesFile.files)
    : [];
  if (pendingPromoImagesData.length) promoInputs.promoImages.value = "";
});

cancelEditButton.addEventListener("click", resetCatalogForm);

catalogForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!can("editMenu")) return;
  const name = itemNameInput.value.trim();
  const price = Number(itemPriceInput.value);
  const category = itemCategoryInput.value.trim() || "Flower";
  const subcategory = itemSubcategoryInput.value.trim();
  const brand = itemBrandInput.value.trim();
  const description = itemDescriptionInput.value.trim();
  const stock = Number(itemStockInput.value || 0);
  const limit = Number(itemLimitInput.value || 0);
  const tags = itemTagsInput.value.trim();
  const variants = parseVariants(itemVariantsInput.value);

  if (!name || Number.isNaN(price)) return;

  const currentItem = catalog.find((item) => item.id === editingItemId);
  const image = pendingImageFile
    ? await uploadImageFile(pendingImageFile, "products")
    : itemImageUrlInput.value.trim() || currentItem?.image || defaultProductImage;
  const itemData = { name, price, category, subcategory, brand, description, stock, limit, tags, image, variants };

  if (editingItemId) {
    catalog = catalog.map((item) => item.id === editingItemId ? { ...item, ...itemData } : item);
  } else {
    catalog = [
      { id: `item-${Date.now()}`, ...itemData, active: true },
      ...catalog
    ];
  }

  saveCatalog();
  renderCategoryControls();
  renderBrowseControls();
  renderCatalog();
  renderMerchants();
  resetCatalogForm();
});

document.getElementById("resetCatalogButton").addEventListener("click", () => {
  if (!can("deleteProducts")) return;
  catalog = [...defaultCatalog];
  saveCatalog();
  renderCategoryControls();
  renderBrowseControls();
  renderMerchants();
  renderCatalog();
  resetCatalogForm();
});

designForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!can("coreDesign")) return;
  design = {
    name: brandNameInput.value.trim() || defaultDesign.name,
    color: brandColorInput.value || defaultDesign.color,
    preset: stylePresetInput.value || defaultDesign.preset
  };
  saveDesign();
  applyDesign();
});

document.getElementById("resetDesignButton").addEventListener("click", () => {
  if (!can("coreDesign")) return;
  design = { ...defaultDesign };
  saveDesign();
  applyDesign();
});

frontPageForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!can("coreDesign")) return;
  const uploadedHeroImages = pendingHeroImageFiles.length
    ? await uploadImageFiles(pendingHeroImageFiles, "hero")
    : [];
  frontPage = {
    ...frontPage,
    deliveryArea: frontPageInputs.deliveryArea.value.trim() || defaultFrontPage.deliveryArea,
    heroEyebrow: frontPageInputs.heroEyebrow.value.trim() || defaultFrontPage.heroEyebrow,
    heroTitle: frontPageInputs.heroTitle.value.trim() || defaultFrontPage.heroTitle,
    heroDescription: frontPageInputs.heroDescription.value.trim() || defaultFrontPage.heroDescription,
    heroImages: uploadedHeroImages.length ? uploadedHeroImages : parseImageList(frontPageInputs.heroImages.value),
    brandEyebrow: frontPageInputs.brandEyebrow.value.trim() || defaultFrontPage.brandEyebrow,
    brandHeadline: frontPageInputs.brandHeadline.value.trim() || defaultFrontPage.brandHeadline,
    brandDescription: frontPageInputs.brandDescription.value.trim() || defaultFrontPage.brandDescription,
    brandLayout: frontPageInputs.brandLayout.value || defaultFrontPage.brandLayout,
    brandPanelStyle: frontPageInputs.brandPanelStyle.value || defaultFrontPage.brandPanelStyle,
    brandAccentColor: frontPageInputs.brandAccentColor.value || defaultFrontPage.brandAccentColor,
    navHomeLabel: frontPageInputs.navHomeLabel.value.trim() || defaultFrontPage.navHomeLabel,
    navCatalogLabel: frontPageInputs.navCatalogLabel.value.trim() || defaultFrontPage.navCatalogLabel,
    navMemberLabel: frontPageInputs.navMemberLabel.value.trim() || defaultFrontPage.navMemberLabel,
    navCartLabel: frontPageInputs.navCartLabel.value.trim() || defaultFrontPage.navCartLabel,
    navOrderLabel: frontPageInputs.navOrderLabel.value.trim() || defaultFrontPage.navOrderLabel,
    homeBrowseButton: frontPageInputs.homeBrowseButton.value.trim() || defaultFrontPage.homeBrowseButton,
    homeMemberButton: frontPageInputs.homeMemberButton.value.trim() || defaultFrontPage.homeMemberButton,
    homeTrackButton: frontPageInputs.homeTrackButton.value.trim() || defaultFrontPage.homeTrackButton,
    homeSearchLabel: frontPageInputs.homeSearchLabel.value.trim() || defaultFrontPage.homeSearchLabel,
    homeSearchPlaceholder: frontPageInputs.homeSearchPlaceholder.value.trim() || defaultFrontPage.homeSearchPlaceholder,
    homeSearchButton: frontPageInputs.homeSearchButton.value.trim() || defaultFrontPage.homeSearchButton,
    featuredDrop: frontPageInputs.featuredDrop.value.trim() || defaultFrontPage.featuredDrop,
    featuredDescription: frontPageInputs.featuredDescription.value.trim() || defaultFrontPage.featuredDescription,
    flowerNote: frontPageInputs.flowerNote.value.trim() || defaultFrontPage.flowerNote,
    flowerCategoryButton: frontPageInputs.flowerCategoryButton.value.trim() || defaultFrontPage.flowerCategoryButton,
    syrupNote: frontPageInputs.syrupNote.value.trim() || defaultFrontPage.syrupNote,
    syrupCategoryButton: frontPageInputs.syrupCategoryButton.value.trim() || defaultFrontPage.syrupCategoryButton,
    apparelNote: frontPageInputs.apparelNote.value.trim() || defaultFrontPage.apparelNote,
    apparelCategoryButton: frontPageInputs.apparelCategoryButton.value.trim() || defaultFrontPage.apparelCategoryButton,
    cartBarButton: frontPageInputs.cartBarButton.value.trim() || defaultFrontPage.cartBarButton,
    cartBrowseButton: frontPageInputs.cartBrowseButton.value.trim() || defaultFrontPage.cartBrowseButton,
    cartCheckoutButton: frontPageInputs.cartCheckoutButton.value.trim() || defaultFrontPage.cartCheckoutButton
  };
  pendingHeroImagesData = [];
  pendingHeroImageFiles = [];
  frontPageInputs.heroImagesFile.value = "";
  design = {
    ...design,
    color: frontPageInputs.layoutColor.value || defaultDesign.color,
    preset: frontPageInputs.layoutPreset.value || defaultDesign.preset
  };
  saveDesign();
  saveFrontPage();
  applyDesign();
  applyFrontPage();
});

document.getElementById("resetFrontPageButton").addEventListener("click", () => {
  if (!can("coreDesign")) return;
  frontPage = { ...defaultFrontPage };
  design = { ...defaultDesign };
  pendingHeroImagesData = [];
  pendingHeroImageFiles = [];
  frontPageInputs.heroImagesFile.value = "";
  saveDesign();
  saveFrontPage();
  applyDesign();
  applyFrontPage();
});

promoForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!can("promo")) return;
  const uploadedPromoImages = pendingPromoImageFiles.length
    ? await uploadImageFiles(pendingPromoImageFiles, "promos")
    : [];
  const uploadedLogoImage = pendingLogoFile ? await uploadImageFile(pendingLogoFile, "logos") : "";
  const uploadedHeroImage = pendingHeroFile ? await uploadImageFile(pendingHeroFile, "hero") : "";
  promo = {
    visible: promoInputs.visible.checked,
    eyebrow: promoInputs.eyebrow.value.trim() || defaultPromo.eyebrow,
    headline: promoInputs.headline.value.trim() || defaultPromo.headline,
    description: promoInputs.description.value.trim() || defaultPromo.description,
    button: promoInputs.button.value.trim() || defaultPromo.button,
    shoutouts: parseShoutouts(promoInputs.shoutouts.value),
    promoImages: uploadedPromoImages.length ? uploadedPromoImages : parseImageList(promoInputs.promoImages.value),
    logoImage: uploadedLogoImage || promoInputs.logoImage.value.trim() || promo.logoImage,
    heroImage: uploadedHeroImage || promoInputs.heroImage.value.trim() || promo.heroImage
  };
  pendingLogoData = "";
  pendingLogoFile = null;
  pendingHeroData = "";
  pendingHeroFile = null;
  pendingPromoImagesData = [];
  pendingPromoImageFiles = [];
  promoInputs.logoFile.value = "";
  promoInputs.heroFile.value = "";
  promoInputs.promoImagesFile.value = "";
  savePromo();
  applyPromo();
});

document.getElementById("resetPromoButton").addEventListener("click", () => {
  if (!can("promo")) return;
  promo = { ...defaultPromo };
  pendingLogoData = "";
  pendingLogoFile = null;
  pendingHeroData = "";
  pendingHeroFile = null;
  pendingPromoImagesData = [];
  pendingPromoImageFiles = [];
  promoInputs.logoFile.value = "";
  promoInputs.heroFile.value = "";
  promoInputs.promoImagesFile.value = "";
  savePromo();
  applyPromo();
});

accessCodesForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!can("accessCodes")) return;
  const guestCode = normalizeAccessCode(guestCodeInput?.value || "");
  const admin = adminCodeInput.value.trim().toUpperCase();

  if (!guestCode || !admin) return;

  accessCodes = {
    customer: "",
    admin: normalizeAccessCode(admin),
    guest: {
      code: guestCode,
      label: guestCodeLabelInput?.value.trim() || defaultAccessCodes.guest.label,
      expires: guestCodeExpiresInput?.value.trim() || ""
    },
    invites: []
  };
  saveAccessCodes();
  applyAccessCodes();
});

document.getElementById("resetCodesButton").addEventListener("click", () => {
  if (!can("accessCodes")) return;
  accessCodes = { ...defaultAccessCodes };
  saveAccessCodes();
  applyAccessCodes();
});

deliverySettingsForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!can("delivery")) return;
  businessSettings = {
    businessName: businessNameSettingInput.value.trim() || defaultBusinessSettings.businessName,
    businessType: businessTypeSettingInput.value.trim() || defaultBusinessSettings.businessType,
    complianceMode: complianceModeInput.value || defaultBusinessSettings.complianceMode,
    ageGateRequired: ageGateRequiredInput.checked,
    minimumAge: Number(minimumAgeInput.value || defaultBusinessSettings.minimumAge),
    idVerificationRequired: idVerificationRequiredInput.checked,
    deliveryEnabled: deliveryEnabledInput.checked,
    pickupEnabled: pickupEnabledInput.checked,
    complianceChecklistEnabled: complianceChecklistEnabledInput.checked,
    memberOnlyMode: memberOnlyModeInput.checked,
    weeklyGuestCodeEnabled: weeklyGuestCodeEnabledInput?.checked ?? defaultBusinessSettings.weeklyGuestCodeEnabled,
    guestCanViewMenu: guestCanViewMenuInput?.checked ?? defaultBusinessSettings.guestCanViewMenu,
    guestCanPlaceFirstOrder: guestCanPlaceFirstOrderInput?.checked ?? defaultBusinessSettings.guestCanPlaceFirstOrder,
    memberApprovalRequired: memberApprovalRequiredInput?.checked ?? defaultBusinessSettings.memberApprovalRequired,
    approvedMemberCodesEnabled: approvedMemberCodesEnabledInput?.checked ?? defaultBusinessSettings.approvedMemberCodesEnabled
  };
  deliverySettings = {
    minimumOrder: Number(minimumOrderInput.value || 0),
    minimumOrderFee: Number(minimumOrderFeeInput.value || 0),
    baseDeliveryFee: Number(baseDeliveryFeeInput.value || 0),
    rushDeliveryFee: Number(rushDeliveryFeeInput.value || 0),
    extendedDeliveryFee: Number(extendedDeliveryFeeInput.value || 0),
    taxRate: Number(taxRateInput.value || 0),
    discountLabel: discountLabelInput.value.trim(),
    discountPercent: Number(discountPercentInput.value || 0),
    promoCodes: parsePromoCodes(promoCodesInput.value),
    bundleDeals: parseBundleDeals(bundleDealsInput.value),
    zones: deliveryZonesInput.value.trim() || defaultDeliverySettings.zones
  };
  saveBusinessSettings();
  saveDeliverySettings();
  applyDeliverySettings();
  updateFeeNote();
  renderCartReview();
});

applyPromoCodeButton.addEventListener("click", () => {
  const code = promoCodeInput.value.trim().toUpperCase();
  const promo = (deliverySettings.promoCodes || []).find((item) => item.code.toUpperCase() === code);
  if (!code) {
    appliedPromoCodes = [];
    promoCodeMessage.textContent = "Promo codes cleared.";
  } else if (promo) {
    if (!appliedPromoCodes.includes(promo.code)) {
      appliedPromoCodes = [...appliedPromoCodes, promo.code];
    }
    promoCodeInput.value = "";
    promoCodeMessage.textContent = `Applied: ${appliedPromoCodes.join(", ")}.`;
  } else {
    promoCodeMessage.textContent = "Promo code not found.";
  }
  updateFeeNote();
  renderCartReview();
});

deliveryOptionInput.addEventListener("change", () => {
  updateFeeNote();
  renderCartReview();
});

document.getElementById("resetSettingsButton").addEventListener("click", () => {
  if (!can("delivery")) return;
  deliverySettings = { ...defaultDeliverySettings };
  businessSettings = { ...defaultBusinessSettings };
  saveBusinessSettings();
  saveDeliverySettings();
  applyDeliverySettings();
});

staffSyncForm?.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!backendConfigured()) {
    updateStaffSyncPanel("Backend unavailable. Changes save locally on this device.");
    return;
  }
  try {
    updateStaffSyncPanel("Connecting sync...");
    await window.SutterBackend.signIn(staffSyncEmailInput.value.trim(), staffSyncPasswordInput.value);
    staffSyncPasswordInput.value = "";
    updateAdminPermissions();
    renderTeamMembers();
    startLiveOrderRefresh();
    runModeAutoSync(activeMode);
    updateStaffSyncPanel("Signed in. Syncing allowed screens.");
  } catch (error) {
    updateStaffSyncPanel(`Sync sign-in failed: ${error.message}`);
  }
});

staffSyncSignOutButton?.addEventListener("click", () => {
  window.SutterBackend?.signOut();
  stopLiveOrderRefresh();
  updateAdminPermissions();
  renderTeamMembers();
  updateStaffSyncPanel("Signed out. Changes save locally on this device.");
  setBackendStatus("Signed out of Supabase.");
});

backendLoginForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!window.SutterBackend?.isConfigured()) {
    setBackendStatus("Add your Supabase URL and anon key to backend-config.js first.");
    return;
  }
  try {
    setBackendStatus("Signing in...");
    await window.SutterBackend.signIn(backendEmailInput.value.trim(), backendPasswordInput.value);
    backendPasswordInput.value = "";
    updateAdminPermissions();
    renderTeamMembers();
    startLiveOrderRefresh();
    runModeAutoSync(activeMode);
    setBackendStatus("Signed in. Pull latest or push this browser data.");
  } catch (error) {
    setBackendStatus(`Sign in failed: ${error.message}`);
  }
});

syncFromBackendButton.addEventListener("click", () => {
  pullFromBackend().catch((error) => setBackendStatus(`Pull failed: ${error.message}`));
});

pushToBackendButton.addEventListener("click", () => {
  pushAllToBackend().catch((error) => setBackendStatus(`Push failed: ${error.message}`));
});

backendSignOutButton.addEventListener("click", () => {
  window.SutterBackend?.signOut();
  stopLiveOrderRefresh();
  updateAdminPermissions();
  renderTeamMembers();
  updateStaffSyncPanel("Signed out. Changes save locally on this device.");
  setBackendStatus("Signed out of Supabase.");
});

teamMemberRoleInput.addEventListener("change", () => {
  setTeamPermissionInputs(getWorkerDefaultPermissions(teamMemberRoleInput.value));
});

cancelTeamEditButton.addEventListener("click", resetTeamMemberForm);

refreshMembersButton?.addEventListener("click", () => {
  refreshMembersFromBackend(false);
});

cancelMemberEditButton?.addEventListener("click", resetMemberAdminForm);

memberAdminForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!can("accessCodes")) return;
  const status = adminMemberStatusInput.value || "pending";
  const existing = memberRecords.find((member) => member.id === (editingMemberIdInput.value || editingMemberId));
  const code = normalizeAccessCode(adminMemberCodeInput.value) || (status === "approved" ? generateShortCode("MBR") : "");
  const member = normalizeMemberRecord({
    id: existing?.id || `member-${Date.now()}`,
    name: adminMemberNameInput.value.trim(),
    phone: adminMemberPhoneInput.value.trim(),
    email: normalizeEmail(adminMemberEmailInput.value),
    code,
    status,
    notes: adminMemberNotesInput.value.trim(),
    contactMethod: existing?.contactMethod || "Text",
    createdAt: existing?.createdAt || new Date().toISOString(),
    approvedAt: status === "approved" ? (existing?.approvedAt || new Date().toISOString()) : (existing?.approvedAt || ""),
    lastOrderAt: existing?.lastOrderAt || ""
  });
  if (!member.name && !member.phone && !member.email) return;
  upsertMemberRecord(member);
  resetMemberAdminForm();
});

teamMemberForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!can("team")) {
    currentAdminProfile.textContent = "Only an Admin can manage team roles.";
    return;
  }
  const email = teamMemberEmailInput.value.trim().toLowerCase();
  const passcode = normalizeWorkerCode(teamMemberPasscodeInput.value);
  const id = editingTeamMemberId || email || `worker-${Date.now()}`;
  if (!teamMemberNameInput.value.trim() && !email && !passcode) return;
  const member = normalizeTeamMember({
    id,
    name: teamMemberNameInput.value.trim() || email || "Worker",
    title: teamMemberTitleInput.value.trim(),
    email,
    passcode,
    role: teamMemberRoleInput.value,
    permissions: getSelectedTeamPermissions(),
    active: teamMemberActiveInput.checked
  });
  const currentEmail = currentAdminEmail();
  const ownerBootstrap = !teamMembers.length && currentEmail && currentEmail !== member.email
    ? [normalizeTeamMember({ id: currentEmail, name: currentEmail, email: currentEmail, role: "owner", active: true })]
    : [];
  teamMembers = [
    member,
    ...ownerBootstrap,
    ...teamMembers.filter((item) => item.id !== member.id)
  ];
  resetTeamMemberForm();
  saveTeamMembers();
});

initializeAccessGate();
setRole(accessLevel === "admin" ? "admin" : accessLevel === "worker" ? "worker" : "customer");
applyDesign();
applyFrontPage();
applyPromo();
applyAccessCodes();
applyDeliverySettings();
applyMemberProfile();
renderCategoryControls();
renderBrowseControls();
renderMerchants();
renderOrders();
renderCatalog();
resetTeamMemberForm();
renderTeamMembers();
resetMemberAdminForm();
renderMemberAdminList();
renderFeedbackInbox();
renderCustomerReceipts();
renderDriverOrders();
updateBasketSummary();
startLiveOrderRefresh();
startCustomerOrderRefresh();

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js").catch(() => {});
}
