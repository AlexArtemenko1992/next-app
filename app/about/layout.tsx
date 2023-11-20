import Link from "next/link";
import { ReactNode } from "react";
interface AboutLayoutProps {
  children: ReactNode;
}

const AboutLayout = ({ children }: AboutLayoutProps) => {
  return (
    <div>
      <h2>About us</h2>
      <ul>
        <li>
          <Link href="/about/team">Team</Link>
        </li>
        <li>
          <Link href="/about/company">Company</Link>
        </li>
      </ul>
      {children}
    </div>
  );
};

export default AboutLayout;
