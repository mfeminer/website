import React from "react";
import { StyleLink } from "@/components/link";
import Container from "@/components/container";

export default function Footer() {
  return (
    <footer className="mt-40">
      <Container>
        <p>
          Bu web sitesinin tasarımı ve kaynak kodları{" "}
          <StyleLink href="https://ademilter.com">Adem İlter</StyleLink> 'e
          aittir. Kullanım izni için kendisine teşekkür ederim.
        </p>
      </Container>
    </footer>
  );
}
