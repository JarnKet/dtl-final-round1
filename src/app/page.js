"use client";
import MenuBar from "@/components/MenuBar";
import Home from "@/components/Home";
import OrangeSection from "@/components/OrangeSection";
import AppleSection from "@/components/AppleSection";
import PeachSection from "@/components/PeeachSection";
import EndSection from "@/components/EndSection";

import { useState } from "react";

export default function Index() {
  const [sectionActive, setSectionActive] = useState("home");

  const renderSection = () => {
    switch (sectionActive) {
      case "home":
        return <Home setSectionActive={setSectionActive} />;
      case "orange":
        return <OrangeSection setSectionActive={setSectionActive} />;
      case "apple":
        return <AppleSection setSectionActive={setSectionActive} />;
      case "peech":
        return <PeachSection setSectionActive={setSectionActive} />;
      case "end":
        return <EndSection />;
      default:
        return <Home />;
    }
  };

  return (
    <main>
      <MenuBar setSectionActive={setSectionActive} />
      {renderSection()}
    </main>
  );
}
