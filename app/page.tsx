import NextImage from "next/image";
import Social from "@/components/social";
import { StyleLink } from "@/components/link";
import Title from "@/components/title";
import Container from "@/components/container";

export default function Index() {
  return (
    <>
      <Container>
        <div className="space-y-6">
          <Title>
            <b className="font-semibold">Merhaba, Ben Furkan 👋</b>
            <br />
            Web uygulama geliştiricisiyim.
          </Title>

          <p className="text-xl">
            <StyleLink href="https://binalyze.com">Binalyze</StyleLink>{" "}
            şirketinde yazılım geliştirici olarak çalışıyorum.
          </p>

          <p className="text-xl">
            <StyleLink href="https://www.linkedin.com/in/furkaneminer">Şurada</StyleLink>{" "} kısa bir özgeçmişim, hemen aşağıda da iletişim bilgilerim var.
            Sosyal medya hesaplarımı aktif olarak kullanmıyorum. İletişim için lütfen e-posta adresimi kullanın.
          </p>
        </div>

        <div className="mt-10">
          <Social />
        </div>
      </Container>
{/*
      <Container size="large" className="mt-20">
        <NextImage
          src="/photos/we.jpg"
          alt="hi"
          priority
          quality={100}
          width={3609}
          height={2404}
          className="rounded-lg saturate-0 transition-all duration-700 hover:saturate-100"
        />
      </Container> */}
    </>
  );
}
