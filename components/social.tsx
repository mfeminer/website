import Link from "@/components/link";
import IconTwitter from "@/components/icons/twitter";
import IconGithub from "@/components/icons/github";
import IconLinkedIn from "@/components/icons/linkedin";
import { SOCIAL } from "@/lib/const";

function SocialButton({ href, children }) {
  return (
    <Link
      href={href}
      blank
      className="
      flex items-center rounded-full bg-zinc-200 p-3 text-zinc-600 no-underline transition-colors
      hover:bg-indigo-100 hover:text-indigo-900
      dark:bg-zinc-700 dark:text-zinc-200
      dark:hover:bg-indigo-800 dark:hover:text-indigo-100"
    >
      {children}
    </Link>
  );
}

export default function Social() {
  return (
    <div className="flex items-center space-x-3">
      <SocialButton href={`mailto:${SOCIAL.email}`}>
        <span className="mx-2 font-medium">Email</span>
      </SocialButton>

      <SocialButton href={SOCIAL.github}>
        <IconGithub />
      </SocialButton>

      <SocialButton href={SOCIAL.linkedin}>
        <IconLinkedIn />
      </SocialButton>

      <SocialButton href={SOCIAL.twitter}>
        <IconTwitter />
      </SocialButton>
    </div>
  );
}
