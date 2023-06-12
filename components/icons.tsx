import {
  SunMedium,
  Moon,
  Loader2,
  FileText,
  Settings,
  Plus,
  ChevronLeft,
  MoreVertical,
  Trash,
  type LucideProps,
} from 'lucide-react';

export const Icons = {
  sun: SunMedium,
  moon: Moon,
  loader: Loader2,
  file: FileText,
  settings: Settings,
  plus: Plus,
  chevronLeft: ChevronLeft,
  more: MoreVertical,
  trash: Trash,
  logo: ({ ...props }: LucideProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" {...props}>
      <path
        fill="currentColor"
        d="M 9.8125 2 C 9.335938 2.089844 8.992188 2.511719 9 3 L 9 18 L 4 18 L 4 43 C 4 45.757813 6.242188 48 9 48 L 41 48 C 43.757813 48 46 45.757813 46 43 L 46 18 L 41 18 L 41 3 C 41 2.449219 40.550781 2 40 2 L 10 2 C 9.96875 2 9.9375 2 9.90625 2 C 9.875 2 9.84375 2 9.8125 2 Z M 11 4 L 39 4 L 39 18 L 30.5 18 C 28.578125 18 27 19.578125 27 21.5 C 27 23.421875 28.578125 25 30.5 25 L 33 25 C 33.566406 25 34 25.433594 34 26 C 34 26.566406 33.566406 27 33 27 L 17 27 C 16.433594 27 16 26.566406 16 26 C 16 25.433594 16.433594 25 17 25 L 19.5 25 C 21.421875 25 23 23.421875 23 21.5 C 23 19.578125 21.421875 18 19.5 18 L 11 18 Z M 15.8125 8 C 15.261719 8.050781 14.855469 8.542969 14.90625 9.09375 C 14.957031 9.644531 15.449219 10.050781 16 10 L 34 10 C 34.359375 10.003906 34.695313 9.816406 34.878906 9.503906 C 35.058594 9.191406 35.058594 8.808594 34.878906 8.496094 C 34.695313 8.183594 34.359375 7.996094 34 8 L 16 8 C 15.96875 8 15.9375 8 15.90625 8 C 15.875 8 15.84375 8 15.8125 8 Z M 15.8125 12 C 15.261719 12.050781 14.855469 12.542969 14.90625 13.09375 C 14.957031 13.644531 15.449219 14.050781 16 14 L 29 14 C 29.359375 14.003906 29.695313 13.816406 29.878906 13.503906 C 30.058594 13.191406 30.058594 12.808594 29.878906 12.496094 C 29.695313 12.183594 29.359375 11.996094 29 12 L 16 12 C 15.96875 12 15.9375 12 15.90625 12 C 15.875 12 15.84375 12 15.8125 12 Z M 0 20 L 0 26 L 2 26 L 2 20 Z M 48 20 L 48 26 L 50 26 L 50 20 Z M 11 33 C 11.550781 33 12 33.449219 12 34 C 12 34.550781 11.550781 35 11 35 C 10.449219 35 10 34.550781 10 34 C 10 33.449219 10.449219 33 11 33 Z M 15 33 C 15.550781 33 16 33.449219 16 34 C 16 34.550781 15.550781 35 15 35 C 14.449219 35 14 34.550781 14 34 C 14 33.449219 14.449219 33 15 33 Z M 19 33 C 19.550781 33 20 33.449219 20 34 C 20 34.550781 19.550781 35 19 35 C 18.449219 35 18 34.550781 18 34 C 18 33.449219 18.449219 33 19 33 Z M 23 33 C 23.550781 33 24 33.449219 24 34 C 24 34.550781 23.550781 35 23 35 C 22.449219 35 22 34.550781 22 34 C 22 33.449219 22.449219 33 23 33 Z M 27 33 C 27.550781 33 28 33.449219 28 34 C 28 34.550781 27.550781 35 27 35 C 26.449219 35 26 34.550781 26 34 C 26 33.449219 26.449219 33 27 33 Z M 31 33 C 31.550781 33 32 33.449219 32 34 C 32 34.550781 31.550781 35 31 35 C 30.449219 35 30 34.550781 30 34 C 30 33.449219 30.449219 33 31 33 Z M 35 33 C 35.550781 33 36 33.449219 36 34 C 36 34.550781 35.550781 35 35 35 C 34.449219 35 34 34.550781 34 34 C 34 33.449219 34.449219 33 35 33 Z M 39 33 C 39.550781 33 40 33.449219 40 34 C 40 34.550781 39.550781 35 39 35 C 38.449219 35 38 34.550781 38 34 C 38 33.449219 38.449219 33 39 33 Z M 13 37 C 13.550781 37 14 37.449219 14 38 C 14 38.550781 13.550781 39 13 39 C 12.449219 39 12 38.550781 12 38 C 12 37.449219 12.449219 37 13 37 Z M 17 37 C 17.550781 37 18 37.449219 18 38 C 18 38.550781 17.550781 39 17 39 C 16.449219 39 16 38.550781 16 38 C 16 37.449219 16.449219 37 17 37 Z M 21 37 C 21.550781 37 22 37.449219 22 38 C 22 38.550781 21.550781 39 21 39 C 20.449219 39 20 38.550781 20 38 C 20 37.449219 20.449219 37 21 37 Z M 25 37 C 25.550781 37 26 37.449219 26 38 C 26 38.550781 25.550781 39 25 39 C 24.449219 39 24 38.550781 24 38 C 24 37.449219 24.449219 37 25 37 Z M 29 37 C 29.550781 37 30 37.449219 30 38 C 30 38.550781 29.550781 39 29 39 C 28.449219 39 28 38.550781 28 38 C 28 37.449219 28.449219 37 29 37 Z M 33 37 C 33.550781 37 34 37.449219 34 38 C 34 38.550781 33.550781 39 33 39 C 32.449219 39 32 38.550781 32 38 C 32 37.449219 32.449219 37 33 37 Z M 37 37 C 37.550781 37 38 37.449219 38 38 C 38 38.550781 37.550781 39 37 39 C 36.449219 39 36 38.550781 36 38 C 36 37.449219 36.449219 37 37 37 Z M 16 41 L 34 41 C 34.550781 41 35 41.449219 35 42 C 35 42.550781 34.550781 43 34 43 L 16 43 C 15.449219 43 15 42.550781 15 42 C 15 41.449219 15.449219 41 16 41 Z"
      />
    </svg>
  ),
  google: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width="144px"
      height="144px"
      {...props}
    >
      <path
        fill="#fbc02d"
        d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
      />
      <path
        fill="#e53935"
        d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
      />
      <path
        fill="#4caf50"
        d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
      />
      <path
        fill="#1565c0"
        d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
      />
    </svg>
  ),
  gitHub: (props: LucideProps) => (
    <svg viewBox="0 0 438.549 438.549" {...props}>
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
      ></path>
    </svg>
  ),
};
