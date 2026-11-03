export function ChevronRightIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="text-quaternary transition-all duration-150 group-hover:translate-x-0.5 group-hover:text-primary dark:text-tertiary"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M10.75 8.75L14.25 12L10.75 15.25"
      />
    </svg>
  );
}

export function ExternalArrowIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="text-primary"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M17.25 15.25V6.75H8.75"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M17 7L6.75 17.25"
      />
    </svg>
  );
}

export function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 0C8.95 0 0 8.95 0 20C0 28.85 5.725 36.325 13.675 38.975C14.675 39.15 15.05 38.55 15.05 38.025C15.05 37.55 15.025 35.975 15.025 34.3C10 35.225 8.7 33.075 8.3 31.95C8.075 31.375 7.1 29.6 6.25 29.125C5.55 28.75 4.55 27.825 6.225 27.8C7.8 27.775 8.925 29.25 9.3 29.85C11.1 32.875 13.975 32.025 15.125 31.5C15.3 30.2 15.825 29.325 16.4 28.825C11.95 28.325 7.3 26.6 7.3 18.95C7.3 16.775 8.075 14.975 9.35 13.575C9.15 13.075 8.45 11.025 9.55 8.275C9.55 8.275 11.225 7.75 15.05 10.325C16.65 9.875 18.35 9.65 20.05 9.65C21.75 9.65 23.45 9.875 25.05 10.325C28.875 7.725 30.55 8.275 30.55 8.275C31.65 11.025 30.95 13.075 30.75 13.575C32.025 14.975 32.8 16.75 32.8 18.95C32.8 26.625 28.125 28.325 23.675 28.825C24.4 29.45 25.025 30.65 25.025 32.525C25.025 35.2 25 37.35 25 38.025C25 38.55 25.375 39.175 26.375 38.975C34.275 36.325 40 28.825 40 20C40 8.95 31.05 0 20 0Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function XIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
        fill="currentColor"
      />
    </svg>
  );
}

export function RssIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M4 11a9 9 0 0 1 9 9" />
      <path d="M4 4a16 16 0 0 1 16 16" />
      <circle cx="5" cy="19" r="1.25" fill="currentColor" />
    </svg>
  );
}

export function MenuToggleIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d={isOpen ? "M6 6L18 18" : "M5 8H19"}
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        className="transition-all duration-200"
      />
      <path
        d={isOpen ? "M6 18L18 6" : "M5 16H19"}
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        className="transition-all duration-200"
      />
    </svg>
  );
}
