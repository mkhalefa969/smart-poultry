import { useState } from "react";
import { useTranslation } from "react-i18next";
import { X, Send, CheckCircle2 } from "lucide-react";

type DemoModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    phone: "",
    email: "",
    notes: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // هنا يتم إرسال البيانات للـ API
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 1000);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setFormData({ fullName: "", company: "", phone: "", email: "", notes: "" });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-white/20 bg-brand-deep/95 p-6 sm:p-8 shadow-2xl backdrop-blur-xl text-white">
        
        {/* زر الإغلاق */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 text-white/60 hover:text-white transition-colors rtl:right-auto rtl:left-5"
        >
          <X className="h-6 w-6" />
        </button>

        {isSubmitted ? (
          /* رسالة النجاح بعد الإرسال */
          <div className="py-8 text-center flex flex-col items-center justify-center space-y-4">
            <CheckCircle2 className="h-16 w-16 text-highlight animate-bounce" />
            <h3 className="text-2xl font-bold">
              {t("demoModal.successTitle")}
            </h3>
            <p className="text-white/70 max-w-xs text-sm">
              {t("demoModal.successDesc")}
            </p>
            <button
              onClick={handleResetAndClose}
              className="mt-4 rounded-full bg-highlight px-6 py-2.5 text-sm font-semibold text-brand-deep transition-transform hover:scale-105"
            >
              {t("demoModal.close")}
            </button>
          </div>
        ) : (
          /* النموذج الرئيسي */
          <>
            <div className="mb-6">
              <h3 className="text-2xl font-bold tracking-tight">
                {t("demoModal.title")}
              </h3>
              <p className="mt-1 text-xs text-white/70">
                {t("demoModal.subtitle")}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* الاسم الكامل */}
              <div>
                <label className="block text-xs font-medium mb-1 text-white/80">
                  {t("demoModal.fullName")}
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder={t("demoModal.fullNamePlaceholder")}
                  className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-white/40 focus:border-highlight focus:outline-none focus:ring-1 focus:ring-highlight"
                />
              </div>

              {/* اسم الشركة */}
              <div>
                <label className="block text-xs font-medium mb-1 text-white/80">
                  {t("demoModal.company")}
                </label>
                <input
                  type="text"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  placeholder={t("demoModal.companyPlaceholder")}
                  className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-white/40 focus:border-highlight focus:outline-none focus:ring-1 focus:ring-highlight"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* رقم الهاتف */}
                <div>
                  <label className="block text-xs font-medium mb-1 text-white/80">
                    {t("demoModal.phone")}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={t("demoModal.phonePlaceholder")}
                    className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-white/40 focus:border-highlight focus:outline-none focus:ring-1 focus:ring-highlight"
                  />
                </div>

                {/* البريد الإلكتروني */}
                <div>
                  <label className="block text-xs font-medium mb-1 text-white/80">
                    {t("demoModal.email")}
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t("demoModal.emailPlaceholder")}
                    className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-white/40 focus:border-highlight focus:outline-none focus:ring-1 focus:ring-highlight"
                  />
                </div>
              </div>

              {/* ملاحظات إضافية */}
              <div>
                <label className="block text-xs font-medium mb-1 text-white/80">
                  {t("demoModal.notes")}
                </label>
                <textarea
                  name="notes"
                  rows={3}
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder={t("demoModal.notesPlaceholder")}
                  className="w-full resize-none rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-white/40 focus:border-highlight focus:outline-none focus:ring-1 focus:ring-highlight"
                />
              </div>

              {/* زر الإرسال */}
              <button
                type="submit"
                disabled={loading}
                className="mt-2 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-highlight py-3 text-sm font-semibold text-brand-deep transition-all hover:scale-[1.01] hover:shadow-glow disabled:opacity-50"
              >
                {loading ? (
                  <span>{t("demoModal.sending")}</span>
                ) : (
                  <>
                    <span>{t("demoModal.submit")}</span>
                    <Send className="h-4 w-4 rtl:rotate-180" />
                  </>
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}