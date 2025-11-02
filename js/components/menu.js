// Biến toàn cục để quản lý timer của thông báo
let notificationTimer;
let notificationPopup;
let notificationBackdrop;
let notificationMessage;
let notificationCancelBtn;

function getImportBtn() {
    return `
        <button
            id="import-btn"
            class="px-4 py-2 bg-slate-300 font-medium rounded-lg hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-grey-700 focus:ring-offset-2 transition-colors"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"
                />
            </svg>
        </button>
    `;
}

function getExportBtn() {
    return `
        <button
            id="export-btn"
            class="px-4 py-2 bg-slate-300 font-medium rounded-lg hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-grey-700 focus:ring-offset-2 transition-colors"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 9.75v6.75m0 0-3-3m3 3 3-3m-8.25 6a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"
                />
            </svg>
        </button>
    `;
}

function getDelBtn() {
    return `
        <button
            id="del-btn"
            class="px-4 py-2 bg-red-600 font-medium text-white rounded-lg hover:bg-red-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-grey-700 focus:ring-offset-2 transition-colors"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
                />
            </svg>
        </button>
    `;
}

// Load manu component
function loadImportBtn() {
    const importBtn = document.getElementById("import-btn");
    if (importBtn) {
        importBtn.innerHTML = getImportBtn();
        importBtn.addEventListener("click", () => {
            console.log("Import clicked.");

            // Import function
            showNotification("Hello world...");
        });
    }
}

function loadExportBtn() {
    const exportBtn = document.getElementById("export-btn");
    if (exportBtn) {
        exportBtn.innerHTML = getExportBtn();
        exportBtn.addEventListener("click", () => {
            console.log("Export clicked.");

            // EXport function
        });
    }
}

function loadDelBtn() {
    const delBtn = document.getElementById("del-btn");
    if (delBtn) {
        delBtn.innerHTML = getDelBtn();
        delBtn.addEventListener("click", () => {
            console.log("Delete clicked.");

            // Del function
        });
    }
}

/**
 *
 * Tạo hàm thực thi khi click ở từng nút
 */

/**
 * ------------- Notification ------------------------
 *
 */
function getNoti() {
    return `
        <div id="notification-backdrop" 
             class="fixed inset-0 bg-black bg-opacity-50 z-40 
                    transition-opacity duration-300 opacity-0 hidden">
        </div>

        <div id="notification-popup" 
             class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                    bg-white p-4 rounded-lg shadow-lg 
                    w-full max-w-sm z-50 
                    transition-all duration-300 opacity-0 scale-90 hidden">
            
            <p id="notification-message" class="mb-4 border-b border-salte-200 border-opacity-30 pb-3">Message goes here.</p>

            <div class="flex justify-end">
                <button id="notification-OK-btn" 
                        class="w-[68px] px-3 py-1 bg-blue-600 text-white text-sm rounded-md hover:bg-opacity-50">
                    OK
                </button>
                <button id="notification-cancel-btn" 
                        class="w-[68px] px-3 py-1 bg-white border bg-opacity-20 text-sm text-blue-600 rounded-md hover:bg-slate-100 ml-2">
                    Cancel
                </button>
            </div>
        </div>
    `;
}

function loadNotification() {
    const notificationContainer = document.createElement("div");
    notificationContainer.id = "notification-container-wrapper";

    notificationContainer.innerHTML = getNoti();

    document.body.appendChild(notificationContainer);

    notificationPopup = document.getElementById("notification-popup");
    notificationBackdrop = document.getElementById("notification-backdrop");
    notificationMessage = document.getElementById("notification-message");
    notificationOKBtn = document.getElementById("notification-OK-btn");
    notificationCancelBtn = document.getElementById("notification-cancel-btn");

    // OK btn
    if (notificationBackdrop && notificationOKBtn) {
        notificationBackdrop.addEventListener("click", hideNotification);
        // Thuc hien ham khi bam nut

        notificationOKBtn.addEventListener("click", hideNotification);
    }

    // Cancel btn
    if (notificationBackdrop && notificationCancelBtn) {
        notificationBackdrop.addEventListener("click", hideNotification);
        notificationCancelBtn.addEventListener("click", hideNotification);
    }
}

function showNotification(message, type = "success") {
    if (!notificationPopup || !notificationMessage || !notificationBackdrop) {
        console.error("Notification error!!!");
        return;
    }

    notificationMessage.textContent = message;

    notificationPopup.classList.remove("bg-white", "bg-red-500");
    if (type === "error") {
        notificationPopup.classList.add("bg-red-500");
    } else {
        notificationPopup.classList.add("bg-white");
    }

    notificationPopup.classList.remove("hidden", "opacity-0", "scale-90");
    notificationBackdrop.classList.remove("hidden", "opacity-0");
}

function hideNotification() {
    if (!notificationPopup || !notificationBackdrop) {
        return;
    }

    notificationPopup.classList.add("opacity-0", "scale-90");
    notificationBackdrop.classList.add("opacity-0");

    setTimeout(() => {
        notificationPopup.classList.add("hidden");
        notificationBackdrop.classList.add("hidden");
    }, 300);
}

/**
 *
 * ------------ MENU-------------------------
 */
function getMenu() {
    return `
        <div
            // Menu position
            class="
                fixed left-5 top-1/2 -translate-y-1/2 
                z-30 flex flex-col items-center space-y-3
            "
        >
            <div id="menu-items" class="flex flex-col items-center space-y-3">
                ${getImportBtn()} 
                ${getExportBtn()} 
                ${getDelBtn()}
            </div>
            
            </div>
    `;
}

function loadMenu() {
    const menuContainer = document.createElement("div");
    menuContainer.id = "static-menu-container";
    menuContainer.innerHTML = getMenu();

    document.body.appendChild(menuContainer);

    document.getElementById("import-btn").addEventListener("click", () => {
        console.log("Import clicked");
        // Gọi hàm của bạn: showImportPopup();
        showNotification("Hello world...");
    });

    document.getElementById("export-btn").addEventListener("click", () => {
        console.log("Export clicked");
        // Gọi hàm của bạn: showExportPopup();
    });

    document.getElementById("del-btn").addEventListener("click", () => {
        console.log("Delete clicked");
        // Gọi hàm của bạn: showDeletePopup();
    });
}

const currentPagePath = window.location.pathname;

function initializeApp() {
    loadNotification();
    loadImportBtn();
    loadExportBtn();
    loadDelBtn();

    if (!currentPagePath.endsWith("config.html")) {
        loadMenu();
    }
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeApp);
} else {
    initializeApp();
}
