// Tailwind CSS utility classes for common components
export const styles = {
    // Page layout
    page: "m-0 text-text antialiased min-h-[calc(90vh-110px)]",

    // Cards
    card: "bg-card rounded shadow-custom p-4",
    homeContent: "p-5 w-4/5 flex flex-col bg-card rounded-2xl shadow-custom",

    // Buttons - Legacy support
    button: {
        base: "font-medium py-2.5 px-2 text-text rounded transition-all duration-300 border border-solid cursor-pointer disabled:opacity-60 disabled:cursor-wait",
        valid: "bg-primary border-blue-100 text-blue-100 hover:text-text hover:border-primary hover:bg-blue-100",
        option: "bg-green-600 border-blue-100 text-blue-100 hover:text-text hover:border-green-600 hover:bg-blue-100",
        upload: "bg-green-500 text-white py-2.5 px-4 border-0 rounded cursor-pointer flex items-center gap-2.5 hover:bg-green-600",
        error: "bg-button-error hover:bg-blue-100",
        danger: "bg-red-600 text-blue-100 hover:text-text hover:bg-blue-100",
    },

    // Forms
    form: {
        container: "space-y-6",
        group: "space-y-2",
        label: "block text-sm font-medium text-text",
        input: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-primary focus:ring-primary focus:ring-blue-500/50 transition-all duration-300",
        inputError:
            "border-input-error focus:border-input-error focus:ring-input-error",
        errorMessage: "mt-1 text-sm text-input-error",
    },

    // Navigation
    nav: {
        link: "text-text hover:text-primary transition-colors duration-300",
    },

    // Modals
    modal: {
        overlay:
            "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",
        container: "bg-card rounded-2xl shadow-modal max-w-md w-full mx-4 p-6",
        title: "text-xl font-bold text-text mb-4",
        content: "space-y-4",
        footer: "flex justify-end space-x-3 mt-6",
    },

    // Layout
    layout: {
        container: "mx-auto px-4 sm:px-6 lg:px-8",
        section: "py-8",
        grid: "grid gap-6",
        gridCols: {
            1: "grid-cols-1",
            2: "grid-cols-1 md:grid-cols-2",
            3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
            4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
        },
    },

    // Responsive utilities
    responsive: {
        hiddenS: "hidden sm:block",
        hiddenXs: "hidden xs:block",
        showOnlyS: "block sm:hidden",
        showOnlyXs: "block xs:hidden",
    },
};

// Legacy class name mappings for existing components
export const legacyClassMap = {
    "connexion-form":
        "max-w-md mx-auto mt-8 p-6 bg-card rounded-2xl shadow-custom",
    buttons: "flex justify-around space-x-4 mt-4",
    valid: styles.button.valid,
    option: styles.button.option,
    "upload-button": styles.button.upload,
    error: styles.button.error,
    danger: styles.button.danger,
    "input-container": "relative mb-6",
    floating:
        "absolute left-4 transition-all duration-300 ease-in-out pointer-events-none",
    "password-toggle":
        "absolute right-4 top-1/2 transform -translate-y-1/2 text-sm text-primary cursor-pointer hover:text-primary-dark transition-colors duration-200",
};
