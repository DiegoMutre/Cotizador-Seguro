// Get the difference of the year
export const getDifference = year => {
    return new Date().getFullYear() - year;
};

// Calculate the percentage depending on the brand
export const calculateBrand = brand => {
    let percentage;

    switch (brand) {
        case "european":
            percentage = 1.3;
            break;
        case "american":
            percentage = 1.15;
            break;
        case "asian":
            percentage = 1.05;
            break;
        default:
            break;
    }

    return percentage;
};

// Return the increment depending on the plan
export const getPlan = plan => {
    let increment = plan === "basic" ? 1.2 : 1.5;
    return increment;
};

// Convert the first character to uppercase
export const firstUppercase = word =>
    word.charAt(0).toUpperCase() + word.slice(1);
