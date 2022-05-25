const success = document.querySelector(".success");
const warning = document.querySelector(".warning");
const error = document.querySelector(".error");
const toasts = document.querySelector(".toasts");

function show(status, message, className, icon) {
    status.addEventListener("click", function () {
        const toast = document.createElement("div");
        toast.setAttribute("class", `toast ${className}`);
        toast.innerHTML = `
            <i class="fa-solid fa-${icon}"></i>
            <span>${message}</span>
            <div class="line"></div>
            `;
        toasts.appendChild(toast);
        setTimeout(function () {
            toast.remove();
        }, 7000);
    });
}

show(success, "This is a success message !", "toast-success", "circle-check");
show(
    warning,
    "This is a success message !",
    "toast-warning",
    "circle-exclamation"
);
show(
    error,
    "This is a success message !",
    "toast-error",
    "triangle-exclamation"
);
