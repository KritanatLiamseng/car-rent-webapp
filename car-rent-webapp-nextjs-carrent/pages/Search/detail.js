import React from "react";
import styles from "@/styles/Search/detail.module.css";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Link from "next/link";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ThumbnailGallery from "@/components/Thumbsnail/ThumbnailGallery";
import images from "@/components/Card Data/Images";
import img from "@/assets/template/example-car1.jpg";
import Image from "next/image";

const detail = () => {
  return (
    <div className={styles.detailScreen}>
      <div className={styles.header}>
        <Link href={"./Search"} style={{ width: "33.33%" }}>
          <ChevronLeftIcon style={{color:"#333333"}}/>
        </Link>
        <h2 className={styles.titleHeader}>จองรถเช่า</h2>
        <button className={styles.fav}>
          <FavoriteIcon />
        </button>
      </div>
      <div className={styles.container}>
        <ThumbnailGallery images={images} />
        <div className={styles.titleArea}>
          <h3 className={styles.car}>Mazda 2 2017</h3>
          <h3 className={styles.price}>1,999/วัน</h3>
        </div>
        <div className={styles.dataContainer}>
          <h3 className={styles.title}>ข้อมูลรถ</h3>
          <h3 className={styles.data}>ปีจดทะเบียน : </h3>
          <h3 className={styles.data}>เกียร์ : </h3>
          <h3 className={styles.data}>ประเภท : </h3>
          <h3 className={styles.data}>จำนวนผู้โดยสาร : </h3>
          <h3 className={styles.data}>กระเป๋าใบใหญ่ : </h3>
          <h3 className={styles.title}>อุปกรณ์ภายในรถ</h3>
          <h3 className={styles.device}>
            FM/AM Radio , USB/AUX , CD/MP3 , Bluetooth
          </h3>
          <h3 className={styles.title}>ข้อมูลควรรู้</h3>
          <h3 className={styles.musthave}>
            1. จองง่ายๆ เพียงกดปุ่ม "จองรถคันนี้" และกรอกข้อมูลไม่เกิน 1 นาที
          </h3>
          <h3 className={styles.musthave}>
            2. รับหมายเลขการจอง :
            แต่การจองของคุณยังไม่สำเร็จหากไม่มีผู้ให้บริการรถ
            คันที่คุณเลือกไว้ติดต่อกลับมา หรือยืนยันการจอง
          </h3>
          <h3 className={styles.musthave}>
            3. ชำระเงินโดยตรงกับผู้ให้บริการ :
            โดยส่วนมากมีค่าล็อคคิวหรือค่าเช่าบางส่วน ที่ลูกค้าจะต้องชำระก่อน
            ส่นที่เหลือชำระ ณ วันรับรถ
          </h3>
          <h3 className={styles.musthave}>
            3. ชำระเงินโดยตรงกับผู้ให้บริการ :
            โดยส่วนมากมีค่าล็อคคิวหรือค่าเช่าบางส่วน ที่ลูกค้าจะต้องชำระก่อน
            ส่นที่เหลือชำระ ณ วันรับรถ
          </h3>
          <h3 className={styles.musthave}>
            {
              "4. ยืนยันการจองให้บริการ : คุณจะได้รับ sms และ email ยืนยันการจอง "
            }
            {"(หากขั้นตอนที่ 3 และ 4 ครบถ้วนแล้ว)"}
          </h3>
          <h3 className={styles.musthave}>
            5. รับรถ : ตามสถานที่นัดหมายกับผู้ให้บริการ
          </h3>
        </div>
        <div className={styles.rentalContainer}>
          <div style={{ flexDirection: "row", display: "flex",marginBottom:15 }}>
            <Image src={img} className={styles.img} />
            <div
              style={{
                justifyContent: "space-between",
                display: "flex",
                height: 50,
                flexDirection: "column",
              }}
            >
              <p>สไมล์รถเช่า</p>
              <div>
                <Link href={"./review"} className={styles.button}>8.5 ดีเยี่ยม</Link> | {"(235)"}
              </div>
            </div>
          </div>
          <h3 className={styles.title}>เวลาทำการ</h3>
          <h3 className={styles.data}>08.00 - 21.00 น. </h3>
          <h3 className={styles.title}>รับส่งรถนอกเวลาทำการ</h3>
          <h3 className={styles.data}>นอกเวลาทำการคิดค่าบริการเพิ่มเติมเที่ยวละ 200 บาท </h3>
          <h3 className={styles.title}>บริการ</h3>
          <h3 className={styles.data}>บริการ รับ-ส่ง สนามบิน ฟรี!!! </h3>
          <h3 className={styles.title}>การชำระเงิน</h3>
          <h3 className={styles.data}>รับเงินสด และ  เงินโอน </h3>
          <h3 className={styles.title}>ประกันเสริม</h3>
          <h3 className={styles.data}>ไม่มีบริการขายประกันเสริม </h3>
          <h3 className={styles.title}>อุปกรณ์เสริม</h3>
          <h3 className={styles.data}>{"มีบริการเสริม baby seat ฟรี (จำนวนจำกัด)"}</h3>
          <h3 className={styles.title}>ข้อมูลอื่นๆ</h3>
          <h3 className={styles.data}>รถที่ให้บริการใช้ได้ในเขต จ.เชียงราย - จ.พะเยา เท่านั้น</h3>
        </div>
        <div className={styles.footer}>
          <Link href={"./summary"} className={styles.buttonRental}>จองรถคันนี้</Link>
        </div>
      </div>
    </div>
  );
};

export default detail;
