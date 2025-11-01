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

// Load navigation component
function loadImportBtn() {
    const importBtn = document.getElementById("import-btn");
    if (importBtn) {
        importBtn.innerHTML = getImportBtn();

        // Import function
    }
}

function loadExportBtn() {
    const exportBtn = document.getElementById("export-btn");
    if (exportBtn) {
        exportBtn.innerHTML = getExportBtn();

        // Export function
    }
}

function loadDelBtn() {
    const delBtn = document.getElementById("del-btn");
    if (delBtn) {
        delBtn.innerHTML = getDelBtn();

        // Delete function
    }
}

// Load btn when DOM is ready
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", loadImportBtn);
    document.addEventListener("DOMContentLoaded", loadExportBtn);
    document.addEventListener("DOMContentLoaded", loadDelBtn);
} else {
    loadImportBtn();
    loadExportBtn();
    loadDelBtn();
}
