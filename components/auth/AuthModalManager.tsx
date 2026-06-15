"use client";

import { images } from "@/constants/images";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type AuthView =
  | "sign-in"
  | "sign-up"
  | "forgot-password"
  | "confirmation"
  | "enter-new-password";

type AuthField = {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  inputMode?: "text" | "email" | "tel" | "url" | "numeric" | "decimal" | "search";
};

type AuthConfig = {
  title: string;
  helperText?: string;
  fields: AuthField[];
  socialLabel?: string;
  primaryLabel: string;
  primaryNext?: AuthView | "close";
  secondaryLabel?: string;
  secondaryNext?: AuthView;
  footerText?: string;
  footerLabel?: string;
  footerNext?: AuthView;
  forgotNext?: AuthView;
  compact?: boolean;
};

const authViews: Record<AuthView, AuthConfig> = {
  "sign-in": {
    title: "Sign In To FASCO",
    socialLabel: "Sign in",
    fields: [
      { label: "Email", name: "email", type: "email", autoComplete: "email" },
      {
        label: "Password",
        name: "password",
        type: "password",
        autoComplete: "current-password",
      },
    ],
    primaryLabel: "Sign In",
    primaryNext: "close",
    secondaryLabel: "Register Now",
    secondaryNext: "sign-up",
    forgotNext: "forgot-password",
  },
  "sign-up": {
    title: "Create Account",
    socialLabel: "Sign up",
    fields: [
      { label: "First Name", name: "firstName", autoComplete: "given-name" },
      { label: "Last Name", name: "lastName", autoComplete: "family-name" },
      {
        label: "Email Address",
        name: "email",
        type: "email",
        autoComplete: "email",
      },
      {
        label: "Phone Number",
        name: "phone",
        type: "tel",
        autoComplete: "tel",
      },
      {
        label: "Password",
        name: "password",
        type: "password",
        autoComplete: "new-password",
      },
      {
        label: "Confirm Password",
        name: "confirmPassword",
        type: "password",
        autoComplete: "new-password",
      },
    ],
    primaryLabel: "Create Account",
    primaryNext: "sign-in",
    footerText: "Already have an account?",
    footerLabel: "Login",
    footerNext: "sign-in",
  },
  "forgot-password": {
    title: "Forget Password",
    helperText:
      "Enter your account details and we will send a confirmation code to continue account recovery.",
    fields: [
      { label: "First Name", name: "firstName", autoComplete: "given-name" },
      { label: "Last Name", name: "lastName", autoComplete: "family-name" },
      {
        label: "Email Address",
        name: "email",
        type: "email",
        autoComplete: "email",
      },
      {
        label: "Phone Number",
        name: "phone",
        type: "tel",
        autoComplete: "tel",
      },
    ],
    primaryLabel: "Send Confirmation Code",
    primaryNext: "confirmation",
    footerText: "Already have an account?",
    footerLabel: "Login",
    footerNext: "sign-in",
    compact: true,
  },
  confirmation: {
    title: "Enter The Confirmation Code",
    helperText:
      "Use the code sent to your email or phone to verify this account recovery request.",
    fields: [
      {
        label: "Confirmation Code",
        name: "confirmationCode",
        inputMode: "numeric",
      },
    ],
    primaryLabel: "Recover Account",
    primaryNext: "enter-new-password",
    footerText: "Didn't receive Confirmation Code?",
    footerLabel: "Resend Now",
    footerNext: "confirmation",
    compact: true,
  },
  "enter-new-password": {
    title: "Enter Your New Password",
    helperText: "Choose a new password to finish recovering your FASCO account.",
    fields: [
      {
        label: "New Password",
        name: "newPassword",
        type: "password",
        autoComplete: "new-password",
      },
      {
        label: "Confirmation Password",
        name: "confirmationPassword",
        type: "password",
        autoComplete: "new-password",
      },
    ],
    primaryLabel: "Submit",
    primaryNext: "sign-in",
    compact: true,
  },
};

const socialOptions = [
  { label: "Google", mark: "G" },
  { label: "Email", mark: "@" },
];

function isAuthView(value: string | null): value is AuthView {
  return Boolean(value && value in authViews);
}

function AuthInput({ field }: { field: AuthField }) {
  return (
    <label className="block">
      <span className="sr-only">{field.label}</span>
      <input
        name={field.name}
        type={field.type ?? "text"}
        autoComplete={field.autoComplete}
        inputMode={field.inputMode}
        placeholder={field.label}
        className="w-full border-0 border-b border-[#9D9D9D] bg-transparent px-0 pb-3 pt-2 font-poppins text-base text-[#484848] placeholder:text-[#9D9D9D] focus:border-[#484848] focus:outline-none"
      />
    </label>
  );
}

export default function AuthModalManager() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const view = searchParams.get("auth");
  const activeView = isAuthView(view) ? view : null;
  const config = activeView ? authViews[activeView] : null;

  const setView = (nextView: AuthView | null) => {
    const params = new URLSearchParams(searchParams.toString());

    if (nextView) {
      params.set("auth", nextView);
    } else {
      params.delete("auth");
    }

    const query = params.toString();
    router.push(query ? `${pathname}?${query}` : pathname, { scroll: false });
  };

  const handlePrimary = () => {
    if (!config) return;

    if (config.primaryNext === "close") {
      setView(null);
      return;
    }

    setView(config.primaryNext ?? null);
  };

  return (
    <Dialog.Root open={Boolean(activeView)} onOpenChange={(open) => !open && setView(null)}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[90] bg-black/55 backdrop-blur-sm data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-[91] max-h-[92vh] w-[94vw] max-w-[1120px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[24px] bg-white shadow-[0px_30px_90px_0px_#00000040] focus:outline-none data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95">
          <Dialog.Close className="absolute right-5 top-5 z-20 rounded-full bg-white/90 p-2 text-[#484848] shadow-[0px_10px_30px_0px_#0000001F] transition hover:scale-105">
            <X size={18} />
            <span className="sr-only">Close auth modal</span>
          </Dialog.Close>

          {config && (
            <div className="grid max-h-[92vh] overflow-y-auto lg:grid-cols-[0.9fr_1fr]">
              <div className="relative hidden min-h-[620px] overflow-hidden bg-[#E6E6E6] lg:block">
                <Image
                  src={images.promoPeakyAnnotated}
                  alt="FASCO fashion editorial"
                  fill
                  priority
                  sizes="(min-width: 1024px) 45vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-white/10" />
                <div className="absolute bottom-10 left-10 right-10 text-white">
                  <p className="font-volkhov text-6xl leading-none">FASCO</p>
                  <p className="mt-4 max-w-[360px] font-poppins text-sm leading-6 text-white/85">
                    Discover curated fashion, exclusive arrivals, and effortless
                    account access in one place.
                  </p>
                </div>
              </div>

              <section className="flex min-h-[620px] flex-col px-6 py-8 sm:px-10 lg:px-16 lg:py-12">
                <Dialog.Title className="font-volkhov text-5xl leading-none text-[#484848]">
                  FASCO
                </Dialog.Title>

                <div
                  className={`flex flex-1 flex-col ${
                    config.compact ? "justify-center" : "justify-start pt-10"
                  }`}
                >
                  <div className="w-full max-w-[666px]">
                    <h2 className="font-poppins text-3xl font-normal leading-tight text-[#484848]">
                      {config.title}
                    </h2>

                    {config.helperText && (
                      <p className="mt-4 max-w-[520px] font-poppins text-sm leading-6 text-[#8A8A8A]">
                        {config.helperText}
                      </p>
                    )}

                    {config.socialLabel && (
                      <>
                        <div className="mt-8 grid gap-4 sm:grid-cols-2 sm:gap-6">
                          {socialOptions.map((option) => (
                            <button
                              key={option.label}
                              type="button"
                              className="flex h-[55px] items-center justify-center gap-3 rounded-[10px] border border-[#5B86E5] bg-white font-poppins text-sm text-[#484848] transition-colors hover:bg-[#F7F9FF]"
                            >
                              <span className="flex size-8 items-center justify-center rounded-full bg-[#F5F5F5] font-semibold text-[#484848]">
                                {option.mark}
                              </span>
                              {config.socialLabel} with {option.label}
                            </button>
                          ))}
                        </div>

                        <div className="my-8 flex items-center justify-center gap-4 font-poppins text-2xl text-[#838383]">
                          <span className="h-[5px] w-[30px] rounded-full bg-[#838383]" />
                          OR
                          <span className="h-[5px] w-[30px] rounded-full bg-[#838383]" />
                        </div>
                      </>
                    )}

                    <form
                      className={
                        config.fields.length > 2
                          ? "grid gap-x-5 gap-y-6 sm:grid-cols-2"
                          : `grid gap-y-6 ${config.socialLabel ? "" : "mt-10"}`
                      }
                    >
                      {config.fields.map((field) => (
                        <AuthInput key={field.name} field={field} />
                      ))}
                    </form>

                    <div className="mx-auto mt-8 grid w-full max-w-[575px] gap-4">
                      <button
                        type="button"
                        onClick={handlePrimary}
                        className="flex h-[58px] w-full items-center justify-center rounded-[10px] bg-black font-poppins text-base text-white shadow-[0px_20px_35px_0px_#00000026] transition-transform hover:-translate-y-0.5 active:translate-y-0"
                      >
                        {config.primaryLabel}
                      </button>
                      {config.secondaryLabel && config.secondaryNext && (
                        <button
                          type="button"
                          onClick={() => setView(config.secondaryNext ?? null)}
                          className="flex h-[58px] w-full items-center justify-center rounded-[10px] border border-[#5B86E5] bg-white font-poppins text-base text-[#5B86E5] transition-colors hover:bg-[#F7F9FF]"
                        >
                          {config.secondaryLabel}
                        </button>
                      )}
                    </div>

                    {config.forgotNext && (
                      <div className="mt-3 text-right">
                        <button
                          type="button"
                          onClick={() => setView(config.forgotNext ?? null)}
                          className="font-poppins text-sm text-[#5B86E5]"
                        >
                          Forget Password?
                        </button>
                      </div>
                    )}

                    {config.footerText && config.footerLabel && config.footerNext && (
                      <p className="mt-6 text-center font-poppins text-base text-[#484848]">
                        {config.footerText}{" "}
                        <button
                          type="button"
                          onClick={() => setView(config.footerNext ?? null)}
                          className="text-[#5B86E5]"
                        >
                          {config.footerLabel}
                        </button>
                      </p>
                    )}
                  </div>
                </div>

                <p className="mt-8 self-end font-poppins text-sm text-[#484848]">
                  FASCO Terms &amp; Conditions
                </p>
              </section>
            </div>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
