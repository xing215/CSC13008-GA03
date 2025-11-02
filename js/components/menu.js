// Biến toàn cục để quản lý timer của thông báo
let notificationTimer;

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
 * Tạo hàm thực thi khi click ở từng nút (Tiện cho tái sử dụng)
 */

function showNotification(message, type = "success") {
    const notification = document.getElementById("notification-popup");

    // Nếu không tìm thấy element, thoát
    if (!notification) {
        console.error("Notification element not found!");
        return;
    }

    // Xóa timer cũ (nếu có) để thông báo mới hiển thị đủ
    if (notificationTimer) {
        clearTimeout(notificationTimer);
    }

    // 1. Cập nhật nội dung
    notification.textContent = message;

    // 2. Đổi màu dựa trên type (dùng class Tailwind)
    notification.classList.remove("bg-green-500", "bg-red-500"); // Xóa màu cũ
    if (type === "error") {
        notification.classList.add("bg-red-500");
    } else {
        notification.classList.add("bg-green-500");
    }

    // 3. Hiển thị thông báo (bằng cách đổi class Tailwind)
    notification.classList.remove("opacity-0", "-translate-y-10");
    notification.classList.add("opacity-100", "translate-y-0");

    // 4. Tự động ẩn sau 3 giây
    notificationTimer = setTimeout(() => {
        notification.classList.remove("opacity-100", "translate-y-0");
        notification.classList.add("opacity-0", "-translate-y-10");
    }, 3000); // 3000ms = 3 giây
}

/**
 *
 * ------------ MENU-------------------------
 */
function getMenu() {
    return `
        <div
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
    // 1. Tạo một div container mới
    const menuContainer = document.createElement("div");
    menuContainer.id = "static-menu-container";
    menuContainer.innerHTML = getMenu(); // Lấy HTML từ hàm getMenu đã sửa

    // 2. Thêm container này vào body
    document.body.appendChild(menuContainer);

    // 3. (Đã xóa code toggle)

    // 4. Giữ lại các event listener cho các nút
    document.getElementById("import-btn").addEventListener("click", () => {
        console.log("Import clicked");
        // Gọi hàm của bạn: showImportPopup();
        showNotification("Hello world..."); // Giữ lại code cũ của bạn
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
