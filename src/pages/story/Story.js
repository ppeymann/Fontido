import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import "./story.css";
import FilerobotImageEditor, {
  TABS,
  TOOLS,
} from "react-filerobot-image-editor";

import white from "../../assets/white.png";
import blue from "../../assets/blue.png";
import green from "../../assets/green.png";
import red from "../../assets/red.png";
import purple from "../../assets/purple.png";
import orange from "../../assets/orange.png";
import black from "../../assets/black.png";

const ImageEditor = () => {
  const [src, setSrc] = useState(black);
  const [colorActive, setColorActive] = useState(false);

  const changeFile = (e) => {
    const file = e.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setSrc(imageUrl);
  };

  return (
    <div className="image-editor">
      <div className="image-editor__container">
        <FilerobotImageEditor
          source={src}
          onSave={(editImageObject, designState) => {
            console.log("saved", editImageObject, designState);
          }}
          annotationsCommon={{
            fill: "#ff0000",
          }}
          language="en"
          translations={{
            name: "نام",
            save: "ذخیره",
            saveAs: "ذخیره به عنوان",
            back: "برگشت",
            loading: "Loading...",
            resetOperations: "برگشت به تنظیمات اولیه؟",
            changesLoseConfirmation: "تمام تغییرات حذف می شود",
            changesLoseConfirmationHint: "مطمئنی میخوای ادامه بدی؟",
            cancel: "لغو",
            continue: "ادامه",
            undoTitle: "رفتن به تغییر قبل",
            redoTitle: "رفتن به تغییر بعد",
            showImageTitle: "عکس اصلی",
            zoomInTitle: "Zoom in",
            zoomOutTitle: "Zoom out",
            toggleZoomMenuTitle: "Toggle zoom menu",
            adjustTab: "سایزبندی",
            finetuneTab: "تنظیمات",
            filtersTab: "فیلتر",
            watermarkTab: "واترمارک",
            annotateTab: "کشیدن",
            resize: "تغییر سایز",
            resizeTab: "تغییر سایز",
            invalidImageError: "تصویر ارائه شده نامعتبر است.",
            uploadImageError: "در هنگام آپلود مشکلی پیش آمده",
            areNotImages: "عکس نیستند",
            isNotImage: "عکس نیست",
            toBeUploaded: "آپلود شده است",
            cropTool: "برش",
            original: "اصلی",
            custom: "دلخواه",
            square: "مربع",
            landscape: "منظره",
            portrait: "پرتره",
            ellipse: "بیضی",
            classicTv: "Classic TV",
            cinemascope: "Cinemascope",
            arrowTool: "فلش",
            blurTool: "محوشدن",
            brightnessTool: "روشنایی",
            contrastTool: "وضوح",
            ellipseTool: "بیضی",
            unFlipX: "محور X",
            flipX: "محور X",
            unFlipY: "محور Y",
            flipY: "محور Y",
            hsvTool: "HSV",
            hue: "Hue",
            saturation: "اشباع",
            value: "مقدار",
            imageTool: "عکس",
            importing: "Importing...",
            addImage: "اضافه کردن عکس+",
            lineTool: "خط",
            penTool: "مداد",
            polygonTool: "چند ضلعی",
            sides: "Sides",
            rectangleTool: "مستطیل",
            cornerRadius: "شعاع گوشه",
            resizeWidthTitle: "عرض(پیکسل)",
            resizeHeightTitle: "ارتفاع(پیکسل)",
            toggleRatioLockTitle: "قفل کردن نسبت اندازه",
            reset: "بازنشانی کنید",
            resetSize: "بازنشانی به عکس اصلی",
            rotateTool: "چزخاندن",
            textTool: "متن",
            textSpacings: "فاصله متن",
            textAlignment: "تراز متن",
            fontFamily: "فونت",
            size: "سایز",
            letterSpacing: "فاصله حروف",
            lineHeight: "فاصله خطوط",
            warmthTool: "گرما",
            addWatermark: "اضافه کردن واترمارک+",
            addWatermarkTitle: "تایپ واتر مارک را انتخاب کن",
            uploadWatermark: "واتر مارک را آپلود کن",
            addWatermarkAsText: "متن را اضافه کن",
            padding: "فاصله داخلی",
            shadow: "سایه",
            horizontal: "افقی",
            vertical: "عمودی",
            blur: "محو شدگی",
            opacity: "Opacity",
            position: "موقعیت",
            stroke: "Stroke",
            saveAsModalLabel: "ذخیره به عنوان",
            extension: "افزونه",
            nameIsRequired: "نام الزامیست",
            quality: "کیفیت",
            imageDimensionsHoverTitle: "ذخیره عکس در سایز(عرض * ارتفاع)",
            cropSizeLowerThanResizedWarning:
              "توجه داشته باشید، ناحیه برش انتخابی کمتر از تغییر اندازه اعمال شده است که ممکن است باعث کاهش کیفیت شود",
            actualSize: "اندازه واقعی (100%)",
            fitSize: "اندازه مناسب",
          }}
          Text={{ text: "متن خود را وارد کنید" }}
          Rotate={{ angle: 90, componentType: "slider" }}
          Crop={{
            presetsItems: [
              {
                titleKey: "classicTv",
                descriptionKey: "4:3",
                ratio: 4 / 3,
                // icon: CropClassicTv, // optional, CropClassicTv is a React Function component. Possible (React Function component, string or HTML Element)
              },
              {
                titleKey: "cinemascope",
                descriptionKey: "21:9",
                ratio: 21 / 9,
                // icon: CropCinemaScope, // optional, CropCinemaScope is a React Function component.  Possible (React Function component, string or HTML Element)
              },
            ],
            presetsFolders: [
              {
                titleKey: "socialMedia", // will be translated into Social Media as backend contains this translation key
                // icon: Social, // optional, Social is a React Function component. Possible (React Function component, string or HTML Element)
                groups: [
                  {
                    titleKey: "facebook",
                    items: [
                      {
                        titleKey: "profile",
                        width: 180,
                        height: 180,
                        descriptionKey: "fbProfileSize",
                      },
                      {
                        titleKey: "coverPhoto",
                        width: 820,
                        height: 312,
                        descriptionKey: "fbCoverPhotoSize",
                      },
                    ],
                  },
                ],
              },
            ],
          }}
          tabsIds={[
            TABS.ADJUST,
            TABS.ANNOTATE,
            TABS.FILTERS,
            TABS.FINETUNE,
            TABS.WATERMARK,
          ]}
          defaultTabId={TABS.ADJUST}
          defaultToolId={TOOLS.CROP}
        />
      </div>
      <div className="input-users__editor">
        <div className="image-editor__picker">
          <h3
            className="color-pick__title"
            onClick={() => setColorActive(!colorActive)}
          >
            صفحه رنگی <span>{colorActive ? "<" : ">"}</span>
          </h3>

          <div
            className={
              colorActive
                ? "color-container color-active color-white"
                : "color-container color-white"
            }
            onClick={() => setSrc(white)}
          ></div>
          <div
            className={
              colorActive
                ? "color-container color-active color-blue"
                : "color-container color-blue"
            }
            onClick={() => setSrc(blue)}
          ></div>
          <div
            className={
              colorActive
                ? "color-container color-active color-green"
                : "color-container color-green"
            }
            onClick={() => setSrc(green)}
          ></div>
          <div
            className={
              colorActive
                ? "color-container color-active color-red"
                : "color-container color-red"
            }
            onClick={() => setSrc(red)}
          ></div>
          <div
            className={
              colorActive
                ? "color-container color-active color-purple"
                : "color-container color-purple"
            }
            onClick={() => setSrc(purple)}
          ></div>
          <div
            className={
              colorActive
                ? "color-container color-active color-orange"
                : "color-container color-orange"
            }
            onClick={() => setSrc(orange)}
          ></div>
          <div
            className={
              colorActive
                ? "color-container color-active color-dark"
                : "color-container color-dark"
            }
            onClick={() => setSrc(black)}
          ></div>
        </div>
        <div className="user-input-editor">
          <label htmlFor="input-elem__editor" className="input-editor__label">
            عکس خود را وارد کنید +
            <input
              type="file"
              onChange={changeFile}
              accept="image/*"
              id="input-elem__editor"
            />
          </label>
        </div>
      </div>
    </div>
  );
};

const Story = () => {
  return (
    <>
      <Navbar />
      <ImageEditor />
    </>
  );
};

export default Story;
