export default function InvitationCard() {
  return (
    <section className="flex justify-center items-center py-12 px-4 bg-[#fdfbf7]">
      {/* Vintage Frame Card Box */}
      <div className="relative max-w-lg w-full bg-[#fcfaf6] border-[6px] border-double border-[#2c2c2c] p-6 sm:p-10 text-center text-neutral-800 shadow-2xl rounded-sm">
        
        {/* Header Title */}
        <h2 className="text-2xl sm:text-3xl font-bold tracking-wide text-neutral-900 mb-2">
          မင်္ဂလာဧည့်ခံပွဲ ဖိတ်ကြားလွှာ
        </h2>

        {/* Vintage Divider Ornament */}
        <div className="flex justify-center items-center my-3 text-neutral-500">
          <span className="h-[1px] w-12 bg-neutral-400"></span>
          <span className="mx-3 text-sm">❦</span>
          <span className="h-[1px] w-12 bg-neutral-400"></span>
        </div>

        {/* Groom & Parents Section */}
        <div className="text-sm sm:text-base leading-relaxed space-y-1 mb-5">
          <p className="font-semibold text-neutral-900">(ဦးအောင်ချစ်) + (ဒေါ်ဖွား)၊</p>
          <p className="font-semibold text-neutral-900">(ဦးဖိုးထွေး) + (ဒေါ်ထွေးခင်) တို့၏မြေး</p>
          <p className="text-xs sm:text-sm text-neutral-600">ဟုမ္မလင်းခရိုင်၊ နမ့်တောမြို့နေ</p>
          <p>(ဦးဝေလီ) + ဒေါ်မှဲ့တင် (အောင်ကျော်ဇင်(၂)စတိုး) တို့၏သား</p>
          <p className="text-xs sm:text-sm text-neutral-600">
            မစိမ်းလဲ့ဝါ (Nay Amara Hlaing Floral & surprise boxes service) ၏အစ်ကို
          </p>
          <h3 className="text-2xl font-bold py-2 text-neutral-900 tracking-wider">
            မောင်ဖြိုးသက်ထွန်း
          </h3>
        </div>

        <p className="font-bold text-sm my-1 text-neutral-700">နှင့်</p>

        {/* Bride & Parents Section */}
        <div className="text-sm sm:text-base leading-relaxed space-y-1 mb-5">
          <p className="font-semibold text-neutral-900">
            (ဦးဝင်းဖေ) + (ဒေါ်သင်းသင်းလဲ့ (အ.လ.ပြ-ငြိမ်း)) တို့၏သမီး
          </p>
          <p className="text-xs sm:text-sm text-neutral-600">
            ဦးအောင်ကျော်မိုး + ဒေါ်ဧကရီခိုင် (ဧကရာဇ်ကုမ္ပဏီ - Hena Export Shop) တို့၏ညီမ၊
          </p>
          <p className="text-xs sm:text-sm text-neutral-600">
            ဦးစန်းရွှေ + ဒေါ်တင်တင်ဌေး၊ ("အားမာန်" အုတ်၊သဲ၊ကျောက် ရောင်းဝယ်ရေး)၊ ဦးအောင်မဉ္ဇူ၊
          </p>
          <p className="text-xs sm:text-sm text-neutral-600">
            ဦးအောင်ကျော်လင်း (SRS Shipping Co., Ltd) + ဒေါ်ဇင်ဇင်မြင့် (လ.ဝ.က-ငြိမ်း) တို့၏တူမ
          </p>
          <h3 className="text-2xl font-bold py-2 text-neutral-900 tracking-wider">
            မအိမ့်ရွှေဖြူ
          </h3>
          <p className="text-xs sm:text-sm text-neutral-600 font-medium">
            Bachelor of Economics (Statistics)
          </p>
          <p className="text-xs sm:text-sm text-neutral-600">
            Assistant HR Manager (Hillman Land Co., Ltd.)
          </p>
        </div>

        {/* Invitation Text */}
        <p className="text-xs sm:text-sm text-neutral-700 my-4 leading-relaxed font-medium">
          တို့၏ "မင်္ဂလာဧည့်ခံပွဲ" သို့ ကြွရောက်ချီးမြှင့်ပေးပါရန် နှစ်ဖက်မိဘများနှင့် မင်္ဂလာမောင်နှံတို့မှ ခင်မင်လေးစားစွာဖြင့် ဖိတ်ကြားအပ်ပါသည်။
        </p>

        {/* Ornament Line */}
        <div className="flex justify-center items-center my-4 text-neutral-500">
          <span className="h-[1px] w-16 bg-neutral-400"></span>
          <span className="mx-2 text-xs">◆</span>
          <span className="h-[1px] w-16 bg-neutral-400"></span>
        </div>

        {/* Date, Time & Venue */}
        <div className="space-y-3 text-neutral-800">
          <div className="flex items-center justify-center gap-2">
            <span className="text-lg">📅</span>
            <span className="font-bold tracking-wider text-base sm:text-lg">
              28. NOVEMBER. 2026
            </span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="text-lg">🕒</span>
            <span className="font-semibold text-sm sm:text-base text-neutral-700">
              2:00 PM - 4:00 PM
            </span>
          </div>
          <div className="pt-2">
            <div className="flex items-center justify-center gap-1">
              <span className="text-lg">📍</span>
              <p className="font-bold text-sm sm:text-base text-neutral-900">
                INYA LAKE HOTEL (Mingalar Ballrooms)
              </p>
            </div>
            <p className="text-xs text-neutral-600 mt-0.5">
              No.37, Kabar Aye Pagoda Road, Yangon
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}