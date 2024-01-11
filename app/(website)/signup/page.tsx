"use client";
import { CiGift } from "react-icons/ci";
import Button from "@/components/website/button";
import TicketSection from "@/components/website/ticketSection";
import TableOfContent from "@/components/TableOfContent";

export default function Page() {
  return (
    <TableOfContent>
      <h1 className="text-2xl md:text-4xl font-bold mb-4" id="page-title">
        報名資訊
      </h1>
      <div className="mb-10 flex flex-row justify-around pb-16">
        <div className="grid">
          <p>
            SITCON
            年會堅持不收費原則，秉持著「降低學生參與門檻」的理念，預算全數由個人／企業贊助或是政府／教育單位協助，若您也認同
            SITCON 的理念，歡迎支持我們。
          </p>
        </div>
        <div className="justify-end">
          <Button color="blue" url="/sponsor/">支持我們</Button>
        </div>
      </div>
      <div className="grid grid-cols-2 grid-rows-3 content-center justify-center gap-5 gap-y-20 align-middle md:grid-cols-3 md:grid-rows-2">
        <div className="flex flex-col content-center justify-center align-middle">
          <div className="flex justify-center align-middle content-center">
            <img
              className="w-32"
              src="/2024/website/ticket.svg"
              alt="SITCON Logo"
            />
          </div>
          <p className="text-center text-xl font-bold">一般票</p>
        </div>
        <div className="grid content-center justify-start">
          <ul className="list-disc col-span-1">
            <li>
              第一波售票
              <br />
              2024/01/14 20:00 ~ 2024/01/27 23:59
            </li>
            <li>
              第二波售票
              <br />
              2024/02/04 20:00 ~ 2024/02/17 23:59
            </li>
          </ul>
        </div>
        <div className="grid content-center justify-end">
          <Button color="blue" url="https://sitcon.kktix.cc/events/sitcon2024">
            KKTIX 報名連結
          </Button>
        </div>
        <div className="flex flex-col content-center justify-center align-middle">
          <div className="flex justify-center align-middle content-center">
            <img
              className="w-32"
              src="/2024/website/ticket.svg"
              alt="SITCON Logo"
            />
          </div>
          <p className="text-center text-xl font-bold">遠道而來票</p>
        </div>
        <div className="grid content-center justify-start">
          <ul className="list-disc">
            <li>資格限制：住在偏鄉或離島、海外地區的學生。</li>
            <li>
              先到先審制，報名者需在 2024/01/05 23:59 前填寫{" "}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSc2mKwyjpJyMylQmCrjHDSzt3a6LIMQPWXS3NIYfLIhilBQcg/closedform"
                target="_blank"
                className="underline underline-offset-2"
              >
                申請表單
              </a>。
            </li>
            <li>
              申請資格及更詳細的申請說明，請參考<a
                href="https://hackmd.io/@SITCON/HyCidZ0Wa"
                target="_blank"
                className="underline underline-offset-2"
              >
                SITCON 2024 遠道而來票
              </a>。
            </li>
          </ul>
        </div>
        <div className="grid content-center justify-end">
          <Button
            color="gray"
            url="https://hackmd.io/@SITCON/HyCidZ0Wa"
            className="cursor-not-allowed"
          >
            立即取得
          </Button>
        </div>
        <div className="flex flex-col content-center justify-center align-middle">
          <div className="flex justify-center align-middle content-center">
            <img
              className="w-32"
              src="/2024/website/ticket.svg"
              alt="SITCON Logo"
            />
          </div>
          <p className="text-center text-xl font-bold">
            SITCON x OSCVPass <br />開源貢獻票
          </p>
        </div>
        <div className="grid content-center justify-start">
          <ul className="list-disc">
            <li>資格限制：對開源專案有貢獻者。</li>
            <li>
              需要事先申請。申請表單、申請資格及更詳細的申請說明，請參考
              <a
                href="https://ocf.tw/p/oscvpass/"
                target="_blank"
                className="underline underline-offset-2"
              >
                開源貢獻者快速通關
              </a>。
            </li>
            <li>
              關於歷年來 OSCVPass 申請通過者的專案列表，請參考{" "}
              <a
                href="https://oscvpass.ocf.tw/"
                target="_blank"
                className="underline underline-offset-2"
              >
                OSCVPass 專案介紹
              </a>。
            </li>
          </ul>
        </div>
        <div className="grid content-center justify-end">
          <Button color="blue" url="https://ocf.tw/p/oscvpass/">
            立即取得
          </Button>
        </div>
      </div>
      <h1 className="text-2xl md:text-4xl font-bold mb-4 mt-20" id="post-info">
        投稿資訊
      </h1>
      <div className="mb-10 flex flex-row justify-around pb-16">
        <div className="grid mr-4">
          <p>
            SITCON
            期望成為學生展現自己的舞台，如果你有想要與大家分享的經驗、技術或專案，歡迎於
            2024/01/20
            前用以下形式的投搞，我們歡迎任何與資訊或電腦軟硬體相關的講題。
          </p>
          <ul className="ml-16 list-disc mt-4">
            <li>
              一般議程：10 分鐘與 40
              分鐘的議程，帶給會眾知識的洗禮與思想的壯遊。
            </li>
            <li>
              開放式議程：40
              分鐘的議程，不限定進行方式，歡迎任何非傳統、實現性質的形式進行此場議程。
            </li>
            <li>海報投稿：以靜態海報展出學生個人或團隊專案研究作品。</li>
          </ul>
        </div>
        <div className="justify-end">
          <Button color="blue" url="/cfp/">了解更多</Button>
        </div>
      </div>
      <h1 className="text-2xl md:text-4xl font-bold mb-4" id="souvenir-info">
        紀念品資訊
      </h1>
      <div className="container flex flex-col justify-center items-center text-center pt-20 gap-4">
        <CiGift className="text-8xl" />
        <div>
          <div className="text-4xl font-bold">紀念品</div>
          <div className="text-2xl">即將上線！</div>
        </div>
      </div>
    </TableOfContent>
  );
}
