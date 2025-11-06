import { useState } from 'react';
import { Shield, FileText, Mail, MessageSquare, ChevronDown, ChevronUp } from 'lucide-react';
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
    <section className="py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-[#800020]/10 rounded-full">
            <Shield className="w-5 h-5 text-[#800020]" />
            <span className="text-sm font-semibold text-[#800020]">
              {t('sitePolicies')}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
            {t('privacyPolicyHeader')}
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
            {t('privacyPolicyDescription')}
          </p>
          <p className="text-lg text-slate-500 dark:text-slate-500 mt-2">
            {t('lastUpdated November 2025')}
          </p>
        </div>

        {/* Privacy Policy Section */}
        <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12">
          <div className="bg-white dark:bg-slate-800 rounded-xl sm:rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
            <button
              onClick={() => toggleSection('privacy')}
              className="w-full flex items-center justify-between p-4 sm:p-6 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-[#800020]" />
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
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
              <div className="p-4 sm:p-6 pt-0 space-y-4 sm:space-y-6">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 text-slate-900 dark:text-white flex items-center gap-2">
                    <Mail className="w-5 h-5 text-[#800020]" />
                    {t('informationWeCollect')}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed mb-3">
                    {t('informationCollectionDescription')}
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-slate-600 dark:text-slate-400">
                    <li>{t('fullName')}</li>
                    <li>{t('emailAddress')}</li>
                    <li>{t('jobTitle')}</li>
                    <li>{t('messageOrReview')}</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 text-slate-900 dark:text-white">
                    {t('howWeUseInfo')}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed mb-3">
                    {t('howWeUseInfoDescription')}
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-slate-600 dark:text-slate-400">
                    <li>{t('usePurpose1')}</li>
                    <li>{t('usePurpose2')}</li>
                    <li>{t('usePurpose3')}</li>
                    <li>{t('usePurpose4')}</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 text-slate-900 dark:text-white">
                    {t('dataProtection')}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                    {t('dataProtectionDescription')}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 text-slate-900 dark:text-white">
                    {t('yourRights')}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed mb-3">
                    {t('yourRightsDescription')}
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-slate-600 dark:text-slate-400">
                    <li>{t('rightAccess')}</li>
                    <li>{t('rightCorrect')}</li>
                    <li>{t('rightDelete')}</li>
                    <li>{t('rightObject')}</li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Terms & Conditions Section */}
          <div className="bg-white dark:bg-slate-800 rounded-xl sm:rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
            <button
              onClick={() => toggleSection('terms')}
              className="w-full flex items-center justify-between p-4 sm:p-6 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
            >
              <div className="flex items-center gap-3">
                <FileText className="w-6 h-6 text-[#800020]" />
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  {t('termsConditions')}
                </h2>
              </div>
              {activeSection === 'terms' ? (
                <ChevronUp className="w-6 h-6 text-slate-600 dark:text-slate-400" />
              ) : (
                <ChevronDown className="w-6 h-6 text-slate-600 dark:text-slate-400" />
              )}
            </button>

            {activeSection === 'terms' && (
              <div className="p-4 sm:p-6 pt-0 space-y-4 sm:space-y-6">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 text-slate-900 dark:text-white">
                    {t('acceptanceOfTerms')}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                    {t('acceptanceOfTermsDescription')}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 text-slate-900 dark:text-white">
                    {t('useOfWebsite')}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed mb-3">
                    {t('useOfWebsiteDescription')}
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-slate-600 dark:text-slate-400">
                    <li>{t('websiteRule1')}</li>
                    <li>{t('websiteRule2')}</li>
                    <li>{t('websiteRule3')}</li>
                    <li>{t('websiteRule4')}</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 text-slate-900 dark:text-white flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-[#800020]" />
                    {t('reviewsComments')}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                    {t('reviewsCommentsDescription')}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 text-slate-900 dark:text-white">
                    {t('limitationOfLiability')}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                    {t('limitationOfLiabilityDescription')}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 text-slate-900 dark:text-white">
                    {t('changesToTerms')}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                    {t('changesToTermsDescription')}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-[#800020] to-[#a82e3e] rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center text-white shadow-xl">
          <h3 className="text-xl sm:text-2xl font-bold mb-3">
            {t('haveQuestions')}
          </h3>
          <p className="text-sm sm:text-base mb-4 opacity-90">
            {t('contactUsDescription')}
          </p>
          <a
            href="mailto:Team@C4Rplatform.com"
            target='_blank'
            className="inline-block px-6 sm:px-8 py-3 bg-white text-[#800020] rounded-lg sm:rounded-xl font-bold hover:bg-slate-100 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            {t('contactUs')}
          </a>
        </div>
      </div>
      {/* back to Home */}

      <div className='flex items-center justify-center'>
        <Link to='/' className='flex items-center justify-center 
        mt-10 bg-blue-900 text-white w-fit p-3 rounded-xl font-semibold
         hover:bg-blue-600 duration-300 transition-all gap-1 hover:scale-105'>
        <span>{t('Go To Home')}</span>
        <ArrowRightAltIcon/>
        </Link>
      </div>
    </section>
  );
};
