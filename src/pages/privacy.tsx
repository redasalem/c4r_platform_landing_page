import { useState } from 'react';
import { Shield, FileText, Mail, MessageSquare, ChevronDown, ChevronUp, Phone, MapPin, DollarSign } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Link } from 'react-router-dom';

export const PrivacyPolicy = () => {
  const { t } = useLanguage();
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-5 py-3 bg-[#800020]/10 rounded-full">
            <Shield className="w-6 h-6 text-[#800020]" />
            <span className="text-base font-semibold text-[#800020]">
              {t('sitePolicies')}
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-slate-900 dark:text-white">
            {t('privacyPolicyHeader')}
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400">
            {t('privacyPolicyDescription')}
          </p>
          <p className="text-lg text-slate-500 dark:text-slate-500 mt-2">
            {t('lastUpdated November 2025')}
          </p>
        </div>

        {/* Terms & Conditions Section */}
        <div className="space-y-6 mb-12">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
            <button
              onClick={() => toggleSection('terms')}
              className="w-full flex items-center justify-between p-6 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
            >
              <div className="flex items-center gap-3">
                <FileText className="w-6 h-6 text-[#800020]" />
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                  {t('Terms&Conditions')}
                </h2>
              </div>
              {activeSection === 'terms' ? (
                <ChevronUp className="w-6 h-6 text-slate-600 dark:text-slate-400" />
              ) : (
                <ChevronDown className="w-6 h-6 text-slate-600 dark:text-slate-400" />
              )}
            </button>

            {activeSection === 'terms' && (
              <div className="p-6 pt-0 space-y-6 text-lg sm:text-xl">
                <div>
                  <h3 className="font-semibold mb-3 text-slate-900 dark:text-white">
                    {t('termsAndConditions')}
                  </h3>
                  <ul className="list-disc list-inside space-y-3 text-slate-700 dark:text-slate-300">
                    <li>{t('termsPoint1')}</li>
                    <li>{t('termsPoint2')}</li>
                    <li>{t('termsPoint3')}</li>
                    <li>{t('termsPoint4')}</li>
                    <li>{t('termsPoint5')}</li>
                    <li>{t('termsPoint6')}</li>
                    <li>{t('termsPoint7')}</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-3 flex items-center gap-2 text-slate-900 dark:text-white">
                    <MapPin className="w-5 h-5 text-[#800020]" />
                    {t('deliveryPickupPolicy')}
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300">
                    <li>{t('deliveryPoint1')}</li>
                    <li>{t('deliveryPoint2')}</li>
                    <li>{t('deliveryPoint3')}</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-3 flex items-center gap-2 text-slate-900 dark:text-white">
                    <DollarSign className="w-5 h-5 text-[#800020]" />
                    {t('paymentMethods')}
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300">
                    <li>{t('paymentMethod1')}</li>
                    <li>{t('paymentMethod2')}</li>
                    <li>{t('paymentMethod3')}</li>
                  </ul>
                  <p className="text-slate-600 dark:text-slate-400 mt-3 italic">
                    {t('paymentNote')}
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-3 flex items-center gap-2 text-slate-900 dark:text-white">
                    <Phone className="w-5 h-5 text-[#800020]" />
                    {t('officialChannels')}
                  </h3>
                  <div className="space-y-2 text-slate-700 dark:text-slate-300">
                    <p><strong>{t('whatsapp')}:</strong> <a href="https://wa.me/966554118873" className="text-[#800020] hover:underline">+966554118873</a></p>
                    <p><strong>{t('email')}:</strong> <a href="mailto:Team@C4Rplatform.com" className="text-[#800020] hover:underline">Team@C4Rplatform.com</a></p>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 mt-3 italic">
                    {t('communicationNote')}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Privacy Policy Section */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
            <button
              onClick={() => toggleSection('privacy')}
              className="w-full flex items-center justify-between p-6 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-[#800020]" />
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                  {t('privacyPolicy')}
                </h2>
              </div>
              {activeSection === 'privacy' ? (
                <ChevronUp className="w-6 h-6 text-slate-600 dark:text-slate-400" />
              ) : (
                <ChevronDown className="w-6 h-6 text-slate-600 dark:text-slate-400" />
              )}
            </button>

            {activeSection === 'privacy' && (
              <div className="p-6 pt-0 space-y-6 text-lg sm:text-xl text-slate-700 dark:text-slate-300">
                <p className="leading-relaxed">{t('privacyPolicyIntro')}</p>

                <div>
                  <h3 className="font-semibold mb-3 flex items-center gap-2 text-slate-900 dark:text-white">
                    <Mail className="w-5 h-5 text-[#800020]" />
                    {t('informationCollection')}
                  </h3>
                  <p className="leading-relaxed mb-3">{t('infoCollectionDesc')}</p>
                  <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-400">
                    <li>{t('infoPoint1')}</li>
                    <li>{t('infoPoint2')}</li>
                    <li>{t('infoPoint3')}</li>
                    <li>{t('infoPoint4')}</li>
                    <li>{t('infoPoint5')}</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-3 text-slate-900 dark:text-white">{t('useOfInformation')}</h3>
                  <p className="leading-relaxed mb-3">{t('useInfoDesc')}</p>
                  <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-400">
                    <li>{t('usePoint1')}</li>
                    <li>{t('usePoint2')}</li>
                    <li>{t('usePoint3')}</li>
                    <li>{t('usePoint4')}</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-3 text-slate-900 dark:text-white">{t('informationSharing')}</h3>
                  <p className="leading-relaxed mb-3">{t('sharingDesc')}</p>
                  <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-400">
                    <li>{t('sharingPoint1')}</li>
                    <li>{t('sharingPoint2')}</li>
                  </ul>
                  <p className="leading-relaxed mt-3">{t('noSelling')}</p>
                </div>

                <div>
                  <h3 className="font-semibold mb-3 text-slate-900 dark:text-white">{t('informationProtection')}</h3>
                  <p className="leading-relaxed">{t('protectionDesc')}</p>
                </div>

                <div>
                  <h3 className="font-semibold mb-3 text-slate-900 dark:text-white">{t('customerRights')}</h3>
                  <p className="leading-relaxed mb-3">{t('rightsDesc')}</p>
                  <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-400">
                    <li>{t('rightPoint1')}</li>
                    <li>{t('rightPoint2')}</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-3 text-slate-900 dark:text-white">{t('cookies')}</h3>
                  <p className="leading-relaxed">{t('cookiesDesc')}</p>
                </div>

                <div>
                  <h3 className="font-semibold mb-3 text-slate-900 dark:text-white">{t('policyAmendments')}</h3>
                  <p className="leading-relaxed">{t('amendmentsDesc')}</p>
                </div>

                <div>
                  <h3 className="font-semibold mb-3 flex items-center gap-2 text-slate-900 dark:text-white">
                    <MessageSquare className="w-5 h-5 text-[#800020]" />
                    {t('contactUsSection')}
                  </h3>
                  <p className="leading-relaxed mb-3">{t('contactDesc')}</p>
                  <div className="space-y-2">
                    <p>📞 <strong>{t('whatsapp')}:</strong> <a href="https://wa.me/966554118873" className="text-[#800020] hover:underline">+966554118873</a></p>
                    <p>📧 <strong>{t('email')}:</strong> <a href="mailto:Team@C4Rplatform.com" className="text-[#800020] hover:underline">Team@C4Rplatform.com</a></p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-[#800020] to-[#a82e3e] rounded-2xl p-8 text-center text-white shadow-xl">
          <h3 className="text-2xl font-bold mb-3">{t('haveQuestions')}</h3>
          <p className="text-lg mb-4 opacity-90">{t('contactUsDescription')}</p>
          <a
            href="mailto:Team@C4Rplatform.com"
            target='_blank'
            className="inline-block px-8 py-3 bg-white text-[#800020] rounded-xl font-bold hover:bg-slate-100 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            {t('contactUs')}
          </a>
        </div>
      </div>

      {/* Back to Home */}
      <div className='flex items-center justify-center'>
        <Link to='/' className='flex items-center justify-center mt-10 bg-blue-900 text-white w-fit p-3 rounded-xl font-semibold hover:bg-blue-600 duration-300 transition-all gap-1 hover:scale-105'>
          <span>{t('Go To Home')}</span>
          <ArrowRightAltIcon/>
        </Link>
      </div>
    </section>
  );
};
