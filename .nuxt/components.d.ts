
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T extends DefineComponent> = T & DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>>
type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = (T & DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }>)
interface _GlobalComponents {
      'Ad': typeof import("../app/components/content/Ad.vue")['default']
    'Adad': typeof import("../app/components/content/Adad.vue")['default']
    'Alert': typeof import("../app/components/content/Alert.vue")['default']
    'CalDeficit': typeof import("../app/components/content/CalDeficit.vue")['default']
    'CalcoloBmi': typeof import("../app/components/content/CalcoloBmi.vue")['default']
    'CalculatorComponent': typeof import("../app/components/content/CalculatorComponent.vue")['default']
    'Media': typeof import("../app/components/content/Media.vue")['default']
    'MinHours': typeof import("../app/components/content/MinHours.vue")['default']
    'MortgagePaymentCalculator': typeof import("../app/components/content/MortgagePaymentCalculator.vue")['default']
    'PageLink': typeof import("../app/components/content/PageLink.vue")['default']
    'Quote': typeof import("../app/components/content/Quote.vue")['default']
    'Vid': typeof import("../app/components/content/Vid.vue")['default']
    'Youtube': typeof import("../app/components/content/Youtube.vue")['default']
    'AppFooter': typeof import("../app/components/AppFooter.vue")['default']
    'AppHeader': typeof import("../app/components/AppHeader.vue")['default']
    'AppLogo': typeof import("../app/components/AppLogo.vue")['default']
    'BlogArticleHeader': typeof import("../app/components/Blog/ArticleHeader.vue")['default']
    'BlogReadTime': typeof import("../app/components/Blog/BlogReadTime.vue")['default']
    'BlogPrevNext': typeof import("../app/components/Blog/PrevNext.vue")['default']
    'BlogSocialShare': typeof import("../app/components/Blog/SocialShare.vue")['default']
    'BlogToc': typeof import("../app/components/Blog/Toc.vue")['default']
    'Date': typeof import("../app/components/Date.vue")['default']
    'FooterItem': typeof import("../app/components/Footer/FooterItem.vue")['default']
    'Updated': typeof import("../app/components/Updated.vue")['default']
    'HomeCategoriesCard': typeof import("../app/components/home/CategoriesCard.vue")['default']
    'HomeBlogFeature': typeof import("../app/components/home/HomeBlogFeature.vue")['default']
    'HomeBrandList': typeof import("../app/components/home/HomeBrandList.vue")['default']
    'HomeHero': typeof import("../app/components/home/HomeHero.vue")['default']
    'HomeThreatCard': typeof import("../app/components/home/HomeThreatCard.vue")['default']
    'HomePagesCard': typeof import("../app/components/home/PagesCard.vue")['default']
    'HomeSocialsCard': typeof import("../app/components/home/SocialsCard.vue")['default']
    'UiAlertFeat': typeof import("../app/components/ui/AlertFeat.vue")['default']
    'UiColorSwitch': typeof import("../app/components/ui/ColorSwitch.vue")['default']
    'UiIconXanzhu': typeof import("../app/components/ui/IconXanzhu.vue")['default']
    'UiInfoBar': typeof import("../app/components/ui/InfoBar.vue")['default']
    'UiLogo': typeof import("../app/components/ui/Logo.vue")['default']
    'UiWeather': typeof import("../app/components/ui/Weather.vue")['default']
    'UiSvg': typeof import("../app/components/ui/svg.vue")['default']
    'ContentDoc': typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentDoc.vue")['default']
    'ContentList': typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentList.vue")['default']
    'ContentNavigation': typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentNavigation.vue")['default']
    'ContentQuery': typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue")['default']
    'ContentRenderer': typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.vue")['default']
    'ContentRendererMarkdown': typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentRendererMarkdown.vue")['default']
    'ContentSlot': typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentSlot.vue")['default']
    'DocumentDrivenEmpty': typeof import("../node_modules/@nuxt/content/dist/runtime/components/DocumentDrivenEmpty.vue")['default']
    'DocumentDrivenNotFound': typeof import("../node_modules/@nuxt/content/dist/runtime/components/DocumentDrivenNotFound.vue")['default']
    'Markdown': typeof import("../node_modules/@nuxt/content/dist/runtime/components/Markdown.vue")['default']
    'ProseCode': typeof import("../node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCode.vue")['default']
    'ProseCodeInline': typeof import("../node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCodeInline.vue")['default']
    'ProsePre': typeof import("../node_modules/@nuxt/content/dist/runtime/components/Prose/ProsePre.vue")['default']
    'ProseA': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseA.vue")['default']
    'ProseBlockquote': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseBlockquote.vue")['default']
    'ProseEm': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseEm.vue")['default']
    'ProseH1': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH1.vue")['default']
    'ProseH2': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH2.vue")['default']
    'ProseH3': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH3.vue")['default']
    'ProseH4': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH4.vue")['default']
    'ProseH5': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH5.vue")['default']
    'ProseH6': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH6.vue")['default']
    'ProseHr': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseHr.vue")['default']
    'ProseImg': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseImg.vue")['default']
    'ProseLi': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseLi.vue")['default']
    'ProseOl': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseOl.vue")['default']
    'ProseP': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseP.vue")['default']
    'ProseScript': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseScript.vue")['default']
    'ProseStrong': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseStrong.vue")['default']
    'ProseTable': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTable.vue")['default']
    'ProseTbody': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTbody.vue")['default']
    'ProseTd': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTd.vue")['default']
    'ProseTh': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTh.vue")['default']
    'ProseThead': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseThead.vue")['default']
    'ProseTr': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTr.vue")['default']
    'ProseUl': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseUl.vue")['default']
    'UnoIcon': typeof import("../node_modules/@unocss/nuxt/runtime/UnoIcon.vue")['default']
    'NuxtWelcome': typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
    'NuxtLayout': typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'NuxtErrorBoundary': typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
    'ClientOnly': typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
    'DevOnly': typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
    'ServerPlaceholder': typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'NuxtLink': typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'NuxtLoadingIndicator': typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'NuxtTime': typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
    'NuxtRouteAnnouncer': typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'NuxtImg': typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']
    'NuxtPicture': typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']
    'VitePwaManifest': typeof import("../node_modules/@vite-pwa/nuxt/dist/runtime/components/VitePwaManifest")['default']
    'NuxtPwaManifest': typeof import("../node_modules/@vite-pwa/nuxt/dist/runtime/components/VitePwaManifest")['default']
    'NuxtPwaAssets': typeof import("../node_modules/@vite-pwa/nuxt/dist/runtime/components/NuxtPwaAssets")['default']
    'PwaAppleImage': typeof import("../node_modules/@vite-pwa/nuxt/dist/runtime/components/PwaAppleImage.vue")['default']
    'PwaAppleSplashScreenImage': typeof import("../node_modules/@vite-pwa/nuxt/dist/runtime/components/PwaAppleSplashScreenImage.vue")['default']
    'PwaFaviconImage': typeof import("../node_modules/@vite-pwa/nuxt/dist/runtime/components/PwaFaviconImage.vue")['default']
    'PwaMaskableImage': typeof import("../node_modules/@vite-pwa/nuxt/dist/runtime/components/PwaMaskableImage.vue")['default']
    'PwaTransparentImage': typeof import("../node_modules/@vite-pwa/nuxt/dist/runtime/components/PwaTransparentImage.vue")['default']
    'NuxtLinkLocale': typeof import("../node_modules/@nuxtjs/i18n/dist/runtime/components/NuxtLinkLocale")['default']
    'SwitchLocalePathLink': typeof import("../node_modules/@nuxtjs/i18n/dist/runtime/components/SwitchLocalePathLink")['default']
    'MDC': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/MDC.vue")['default']
    'MDCRenderer': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/MDCRenderer.vue")['default']
    'MDCSlot': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/MDCSlot.vue")['default']
    'ColorScheme': typeof import("../node_modules/@nuxtjs/color-mode/dist/runtime/component.vue3.vue")['default']
    'Icon': typeof import("../node_modules/@nuxt/icon/dist/runtime/components/index")['default']
    'NuxtPage': typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
    'NoScript': typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'Link': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
    'Base': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
    'Title': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
    'Meta': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
    'Style': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
    'Head': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
    'Html': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
    'Body': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
    'NuxtIsland': typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'NuxtRouteAnnouncer': IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
      'LazyAd': LazyComponent<typeof import("../app/components/content/Ad.vue")['default']>
    'LazyAdad': LazyComponent<typeof import("../app/components/content/Adad.vue")['default']>
    'LazyAlert': LazyComponent<typeof import("../app/components/content/Alert.vue")['default']>
    'LazyCalDeficit': LazyComponent<typeof import("../app/components/content/CalDeficit.vue")['default']>
    'LazyCalcoloBmi': LazyComponent<typeof import("../app/components/content/CalcoloBmi.vue")['default']>
    'LazyCalculatorComponent': LazyComponent<typeof import("../app/components/content/CalculatorComponent.vue")['default']>
    'LazyMedia': LazyComponent<typeof import("../app/components/content/Media.vue")['default']>
    'LazyMinHours': LazyComponent<typeof import("../app/components/content/MinHours.vue")['default']>
    'LazyMortgagePaymentCalculator': LazyComponent<typeof import("../app/components/content/MortgagePaymentCalculator.vue")['default']>
    'LazyPageLink': LazyComponent<typeof import("../app/components/content/PageLink.vue")['default']>
    'LazyQuote': LazyComponent<typeof import("../app/components/content/Quote.vue")['default']>
    'LazyVid': LazyComponent<typeof import("../app/components/content/Vid.vue")['default']>
    'LazyYoutube': LazyComponent<typeof import("../app/components/content/Youtube.vue")['default']>
    'LazyAppFooter': LazyComponent<typeof import("../app/components/AppFooter.vue")['default']>
    'LazyAppHeader': LazyComponent<typeof import("../app/components/AppHeader.vue")['default']>
    'LazyAppLogo': LazyComponent<typeof import("../app/components/AppLogo.vue")['default']>
    'LazyBlogArticleHeader': LazyComponent<typeof import("../app/components/Blog/ArticleHeader.vue")['default']>
    'LazyBlogReadTime': LazyComponent<typeof import("../app/components/Blog/BlogReadTime.vue")['default']>
    'LazyBlogPrevNext': LazyComponent<typeof import("../app/components/Blog/PrevNext.vue")['default']>
    'LazyBlogSocialShare': LazyComponent<typeof import("../app/components/Blog/SocialShare.vue")['default']>
    'LazyBlogToc': LazyComponent<typeof import("../app/components/Blog/Toc.vue")['default']>
    'LazyDate': LazyComponent<typeof import("../app/components/Date.vue")['default']>
    'LazyFooterItem': LazyComponent<typeof import("../app/components/Footer/FooterItem.vue")['default']>
    'LazyUpdated': LazyComponent<typeof import("../app/components/Updated.vue")['default']>
    'LazyHomeCategoriesCard': LazyComponent<typeof import("../app/components/home/CategoriesCard.vue")['default']>
    'LazyHomeBlogFeature': LazyComponent<typeof import("../app/components/home/HomeBlogFeature.vue")['default']>
    'LazyHomeBrandList': LazyComponent<typeof import("../app/components/home/HomeBrandList.vue")['default']>
    'LazyHomeHero': LazyComponent<typeof import("../app/components/home/HomeHero.vue")['default']>
    'LazyHomeThreatCard': LazyComponent<typeof import("../app/components/home/HomeThreatCard.vue")['default']>
    'LazyHomePagesCard': LazyComponent<typeof import("../app/components/home/PagesCard.vue")['default']>
    'LazyHomeSocialsCard': LazyComponent<typeof import("../app/components/home/SocialsCard.vue")['default']>
    'LazyUiAlertFeat': LazyComponent<typeof import("../app/components/ui/AlertFeat.vue")['default']>
    'LazyUiColorSwitch': LazyComponent<typeof import("../app/components/ui/ColorSwitch.vue")['default']>
    'LazyUiIconXanzhu': LazyComponent<typeof import("../app/components/ui/IconXanzhu.vue")['default']>
    'LazyUiInfoBar': LazyComponent<typeof import("../app/components/ui/InfoBar.vue")['default']>
    'LazyUiLogo': LazyComponent<typeof import("../app/components/ui/Logo.vue")['default']>
    'LazyUiWeather': LazyComponent<typeof import("../app/components/ui/Weather.vue")['default']>
    'LazyUiSvg': LazyComponent<typeof import("../app/components/ui/svg.vue")['default']>
    'LazyContentDoc': LazyComponent<typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentDoc.vue")['default']>
    'LazyContentList': LazyComponent<typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentList.vue")['default']>
    'LazyContentNavigation': LazyComponent<typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentNavigation.vue")['default']>
    'LazyContentQuery': LazyComponent<typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue")['default']>
    'LazyContentRenderer': LazyComponent<typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.vue")['default']>
    'LazyContentRendererMarkdown': LazyComponent<typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentRendererMarkdown.vue")['default']>
    'LazyContentSlot': LazyComponent<typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentSlot.vue")['default']>
    'LazyDocumentDrivenEmpty': LazyComponent<typeof import("../node_modules/@nuxt/content/dist/runtime/components/DocumentDrivenEmpty.vue")['default']>
    'LazyDocumentDrivenNotFound': LazyComponent<typeof import("../node_modules/@nuxt/content/dist/runtime/components/DocumentDrivenNotFound.vue")['default']>
    'LazyMarkdown': LazyComponent<typeof import("../node_modules/@nuxt/content/dist/runtime/components/Markdown.vue")['default']>
    'LazyProseCode': LazyComponent<typeof import("../node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCode.vue")['default']>
    'LazyProseCodeInline': LazyComponent<typeof import("../node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCodeInline.vue")['default']>
    'LazyProsePre': LazyComponent<typeof import("../node_modules/@nuxt/content/dist/runtime/components/Prose/ProsePre.vue")['default']>
    'LazyProseA': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseA.vue")['default']>
    'LazyProseBlockquote': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseBlockquote.vue")['default']>
    'LazyProseEm': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseEm.vue")['default']>
    'LazyProseH1': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH1.vue")['default']>
    'LazyProseH2': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH2.vue")['default']>
    'LazyProseH3': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH3.vue")['default']>
    'LazyProseH4': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH4.vue")['default']>
    'LazyProseH5': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH5.vue")['default']>
    'LazyProseH6': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH6.vue")['default']>
    'LazyProseHr': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseHr.vue")['default']>
    'LazyProseImg': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseImg.vue")['default']>
    'LazyProseLi': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseLi.vue")['default']>
    'LazyProseOl': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseOl.vue")['default']>
    'LazyProseP': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseP.vue")['default']>
    'LazyProseScript': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseScript.vue")['default']>
    'LazyProseStrong': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseStrong.vue")['default']>
    'LazyProseTable': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTable.vue")['default']>
    'LazyProseTbody': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTbody.vue")['default']>
    'LazyProseTd': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTd.vue")['default']>
    'LazyProseTh': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTh.vue")['default']>
    'LazyProseThead': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseThead.vue")['default']>
    'LazyProseTr': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTr.vue")['default']>
    'LazyProseUl': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseUl.vue")['default']>
    'LazyUnoIcon': LazyComponent<typeof import("../node_modules/@unocss/nuxt/runtime/UnoIcon.vue")['default']>
    'LazyNuxtWelcome': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
    'LazyNuxtLayout': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
    'LazyNuxtErrorBoundary': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
    'LazyClientOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
    'LazyDevOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
    'LazyServerPlaceholder': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
    'LazyNuxtLink': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
    'LazyNuxtLoadingIndicator': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
    'LazyNuxtTime': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
    'LazyNuxtImg': LazyComponent<typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']>
    'LazyNuxtPicture': LazyComponent<typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']>
    'LazyVitePwaManifest': LazyComponent<typeof import("../node_modules/@vite-pwa/nuxt/dist/runtime/components/VitePwaManifest")['default']>
    'LazyNuxtPwaManifest': LazyComponent<typeof import("../node_modules/@vite-pwa/nuxt/dist/runtime/components/VitePwaManifest")['default']>
    'LazyNuxtPwaAssets': LazyComponent<typeof import("../node_modules/@vite-pwa/nuxt/dist/runtime/components/NuxtPwaAssets")['default']>
    'LazyPwaAppleImage': LazyComponent<typeof import("../node_modules/@vite-pwa/nuxt/dist/runtime/components/PwaAppleImage.vue")['default']>
    'LazyPwaAppleSplashScreenImage': LazyComponent<typeof import("../node_modules/@vite-pwa/nuxt/dist/runtime/components/PwaAppleSplashScreenImage.vue")['default']>
    'LazyPwaFaviconImage': LazyComponent<typeof import("../node_modules/@vite-pwa/nuxt/dist/runtime/components/PwaFaviconImage.vue")['default']>
    'LazyPwaMaskableImage': LazyComponent<typeof import("../node_modules/@vite-pwa/nuxt/dist/runtime/components/PwaMaskableImage.vue")['default']>
    'LazyPwaTransparentImage': LazyComponent<typeof import("../node_modules/@vite-pwa/nuxt/dist/runtime/components/PwaTransparentImage.vue")['default']>
    'LazyNuxtLinkLocale': LazyComponent<typeof import("../node_modules/@nuxtjs/i18n/dist/runtime/components/NuxtLinkLocale")['default']>
    'LazySwitchLocalePathLink': LazyComponent<typeof import("../node_modules/@nuxtjs/i18n/dist/runtime/components/SwitchLocalePathLink")['default']>
    'LazyMDC': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/MDC.vue")['default']>
    'LazyMDCRenderer': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/MDCRenderer.vue")['default']>
    'LazyMDCSlot': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/MDCSlot.vue")['default']>
    'LazyColorScheme': LazyComponent<typeof import("../node_modules/@nuxtjs/color-mode/dist/runtime/component.vue3.vue")['default']>
    'LazyIcon': LazyComponent<typeof import("../node_modules/@nuxt/icon/dist/runtime/components/index")['default']>
    'LazyNuxtPage': LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
    'LazyNoScript': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
    'LazyLink': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
    'LazyBase': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
    'LazyTitle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
    'LazyMeta': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
    'LazyStyle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
    'LazyHead': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
    'LazyHtml': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
    'LazyBody': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
    'LazyNuxtIsland': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export const Ad: typeof import("../app/components/content/Ad.vue")['default']
export const Adad: typeof import("../app/components/content/Adad.vue")['default']
export const Alert: typeof import("../app/components/content/Alert.vue")['default']
export const CalDeficit: typeof import("../app/components/content/CalDeficit.vue")['default']
export const CalcoloBmi: typeof import("../app/components/content/CalcoloBmi.vue")['default']
export const CalculatorComponent: typeof import("../app/components/content/CalculatorComponent.vue")['default']
export const Media: typeof import("../app/components/content/Media.vue")['default']
export const MinHours: typeof import("../app/components/content/MinHours.vue")['default']
export const MortgagePaymentCalculator: typeof import("../app/components/content/MortgagePaymentCalculator.vue")['default']
export const PageLink: typeof import("../app/components/content/PageLink.vue")['default']
export const Quote: typeof import("../app/components/content/Quote.vue")['default']
export const Vid: typeof import("../app/components/content/Vid.vue")['default']
export const Youtube: typeof import("../app/components/content/Youtube.vue")['default']
export const AppFooter: typeof import("../app/components/AppFooter.vue")['default']
export const AppHeader: typeof import("../app/components/AppHeader.vue")['default']
export const AppLogo: typeof import("../app/components/AppLogo.vue")['default']
export const BlogArticleHeader: typeof import("../app/components/Blog/ArticleHeader.vue")['default']
export const BlogReadTime: typeof import("../app/components/Blog/BlogReadTime.vue")['default']
export const BlogPrevNext: typeof import("../app/components/Blog/PrevNext.vue")['default']
export const BlogSocialShare: typeof import("../app/components/Blog/SocialShare.vue")['default']
export const BlogToc: typeof import("../app/components/Blog/Toc.vue")['default']
export const Date: typeof import("../app/components/Date.vue")['default']
export const FooterItem: typeof import("../app/components/Footer/FooterItem.vue")['default']
export const Updated: typeof import("../app/components/Updated.vue")['default']
export const HomeCategoriesCard: typeof import("../app/components/home/CategoriesCard.vue")['default']
export const HomeBlogFeature: typeof import("../app/components/home/HomeBlogFeature.vue")['default']
export const HomeBrandList: typeof import("../app/components/home/HomeBrandList.vue")['default']
export const HomeHero: typeof import("../app/components/home/HomeHero.vue")['default']
export const HomeThreatCard: typeof import("../app/components/home/HomeThreatCard.vue")['default']
export const HomePagesCard: typeof import("../app/components/home/PagesCard.vue")['default']
export const HomeSocialsCard: typeof import("../app/components/home/SocialsCard.vue")['default']
export const UiAlertFeat: typeof import("../app/components/ui/AlertFeat.vue")['default']
export const UiColorSwitch: typeof import("../app/components/ui/ColorSwitch.vue")['default']
export const UiIconXanzhu: typeof import("../app/components/ui/IconXanzhu.vue")['default']
export const UiInfoBar: typeof import("../app/components/ui/InfoBar.vue")['default']
export const UiLogo: typeof import("../app/components/ui/Logo.vue")['default']
export const UiWeather: typeof import("../app/components/ui/Weather.vue")['default']
export const UiSvg: typeof import("../app/components/ui/svg.vue")['default']
export const ContentDoc: typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentDoc.vue")['default']
export const ContentList: typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentList.vue")['default']
export const ContentNavigation: typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentNavigation.vue")['default']
export const ContentQuery: typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue")['default']
export const ContentRenderer: typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.vue")['default']
export const ContentRendererMarkdown: typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentRendererMarkdown.vue")['default']
export const ContentSlot: typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentSlot.vue")['default']
export const DocumentDrivenEmpty: typeof import("../node_modules/@nuxt/content/dist/runtime/components/DocumentDrivenEmpty.vue")['default']
export const DocumentDrivenNotFound: typeof import("../node_modules/@nuxt/content/dist/runtime/components/DocumentDrivenNotFound.vue")['default']
export const Markdown: typeof import("../node_modules/@nuxt/content/dist/runtime/components/Markdown.vue")['default']
export const ProseCode: typeof import("../node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCode.vue")['default']
export const ProseCodeInline: typeof import("../node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCodeInline.vue")['default']
export const ProsePre: typeof import("../node_modules/@nuxt/content/dist/runtime/components/Prose/ProsePre.vue")['default']
export const ProseA: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseA.vue")['default']
export const ProseBlockquote: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseBlockquote.vue")['default']
export const ProseEm: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseEm.vue")['default']
export const ProseH1: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH1.vue")['default']
export const ProseH2: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH2.vue")['default']
export const ProseH3: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH3.vue")['default']
export const ProseH4: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH4.vue")['default']
export const ProseH5: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH5.vue")['default']
export const ProseH6: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH6.vue")['default']
export const ProseHr: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseHr.vue")['default']
export const ProseImg: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseImg.vue")['default']
export const ProseLi: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseLi.vue")['default']
export const ProseOl: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseOl.vue")['default']
export const ProseP: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseP.vue")['default']
export const ProseScript: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseScript.vue")['default']
export const ProseStrong: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseStrong.vue")['default']
export const ProseTable: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTable.vue")['default']
export const ProseTbody: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTbody.vue")['default']
export const ProseTd: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTd.vue")['default']
export const ProseTh: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTh.vue")['default']
export const ProseThead: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseThead.vue")['default']
export const ProseTr: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTr.vue")['default']
export const ProseUl: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseUl.vue")['default']
export const UnoIcon: typeof import("../node_modules/@unocss/nuxt/runtime/UnoIcon.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtTime: typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']
export const NuxtPicture: typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']
export const VitePwaManifest: typeof import("../node_modules/@vite-pwa/nuxt/dist/runtime/components/VitePwaManifest")['default']
export const NuxtPwaManifest: typeof import("../node_modules/@vite-pwa/nuxt/dist/runtime/components/VitePwaManifest")['default']
export const NuxtPwaAssets: typeof import("../node_modules/@vite-pwa/nuxt/dist/runtime/components/NuxtPwaAssets")['default']
export const PwaAppleImage: typeof import("../node_modules/@vite-pwa/nuxt/dist/runtime/components/PwaAppleImage.vue")['default']
export const PwaAppleSplashScreenImage: typeof import("../node_modules/@vite-pwa/nuxt/dist/runtime/components/PwaAppleSplashScreenImage.vue")['default']
export const PwaFaviconImage: typeof import("../node_modules/@vite-pwa/nuxt/dist/runtime/components/PwaFaviconImage.vue")['default']
export const PwaMaskableImage: typeof import("../node_modules/@vite-pwa/nuxt/dist/runtime/components/PwaMaskableImage.vue")['default']
export const PwaTransparentImage: typeof import("../node_modules/@vite-pwa/nuxt/dist/runtime/components/PwaTransparentImage.vue")['default']
export const NuxtLinkLocale: typeof import("../node_modules/@nuxtjs/i18n/dist/runtime/components/NuxtLinkLocale")['default']
export const SwitchLocalePathLink: typeof import("../node_modules/@nuxtjs/i18n/dist/runtime/components/SwitchLocalePathLink")['default']
export const MDC: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/MDC.vue")['default']
export const MDCRenderer: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/MDCRenderer.vue")['default']
export const MDCSlot: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/MDCSlot.vue")['default']
export const ColorScheme: typeof import("../node_modules/@nuxtjs/color-mode/dist/runtime/component.vue3.vue")['default']
export const Icon: typeof import("../node_modules/@nuxt/icon/dist/runtime/components/index")['default']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const NuxtRouteAnnouncer: IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyAd: LazyComponent<typeof import("../app/components/content/Ad.vue")['default']>
export const LazyAdad: LazyComponent<typeof import("../app/components/content/Adad.vue")['default']>
export const LazyAlert: LazyComponent<typeof import("../app/components/content/Alert.vue")['default']>
export const LazyCalDeficit: LazyComponent<typeof import("../app/components/content/CalDeficit.vue")['default']>
export const LazyCalcoloBmi: LazyComponent<typeof import("../app/components/content/CalcoloBmi.vue")['default']>
export const LazyCalculatorComponent: LazyComponent<typeof import("../app/components/content/CalculatorComponent.vue")['default']>
export const LazyMedia: LazyComponent<typeof import("../app/components/content/Media.vue")['default']>
export const LazyMinHours: LazyComponent<typeof import("../app/components/content/MinHours.vue")['default']>
export const LazyMortgagePaymentCalculator: LazyComponent<typeof import("../app/components/content/MortgagePaymentCalculator.vue")['default']>
export const LazyPageLink: LazyComponent<typeof import("../app/components/content/PageLink.vue")['default']>
export const LazyQuote: LazyComponent<typeof import("../app/components/content/Quote.vue")['default']>
export const LazyVid: LazyComponent<typeof import("../app/components/content/Vid.vue")['default']>
export const LazyYoutube: LazyComponent<typeof import("../app/components/content/Youtube.vue")['default']>
export const LazyAppFooter: LazyComponent<typeof import("../app/components/AppFooter.vue")['default']>
export const LazyAppHeader: LazyComponent<typeof import("../app/components/AppHeader.vue")['default']>
export const LazyAppLogo: LazyComponent<typeof import("../app/components/AppLogo.vue")['default']>
export const LazyBlogArticleHeader: LazyComponent<typeof import("../app/components/Blog/ArticleHeader.vue")['default']>
export const LazyBlogReadTime: LazyComponent<typeof import("../app/components/Blog/BlogReadTime.vue")['default']>
export const LazyBlogPrevNext: LazyComponent<typeof import("../app/components/Blog/PrevNext.vue")['default']>
export const LazyBlogSocialShare: LazyComponent<typeof import("../app/components/Blog/SocialShare.vue")['default']>
export const LazyBlogToc: LazyComponent<typeof import("../app/components/Blog/Toc.vue")['default']>
export const LazyDate: LazyComponent<typeof import("../app/components/Date.vue")['default']>
export const LazyFooterItem: LazyComponent<typeof import("../app/components/Footer/FooterItem.vue")['default']>
export const LazyUpdated: LazyComponent<typeof import("../app/components/Updated.vue")['default']>
export const LazyHomeCategoriesCard: LazyComponent<typeof import("../app/components/home/CategoriesCard.vue")['default']>
export const LazyHomeBlogFeature: LazyComponent<typeof import("../app/components/home/HomeBlogFeature.vue")['default']>
export const LazyHomeBrandList: LazyComponent<typeof import("../app/components/home/HomeBrandList.vue")['default']>
export const LazyHomeHero: LazyComponent<typeof import("../app/components/home/HomeHero.vue")['default']>
export const LazyHomeThreatCard: LazyComponent<typeof import("../app/components/home/HomeThreatCard.vue")['default']>
export const LazyHomePagesCard: LazyComponent<typeof import("../app/components/home/PagesCard.vue")['default']>
export const LazyHomeSocialsCard: LazyComponent<typeof import("../app/components/home/SocialsCard.vue")['default']>
export const LazyUiAlertFeat: LazyComponent<typeof import("../app/components/ui/AlertFeat.vue")['default']>
export const LazyUiColorSwitch: LazyComponent<typeof import("../app/components/ui/ColorSwitch.vue")['default']>
export const LazyUiIconXanzhu: LazyComponent<typeof import("../app/components/ui/IconXanzhu.vue")['default']>
export const LazyUiInfoBar: LazyComponent<typeof import("../app/components/ui/InfoBar.vue")['default']>
export const LazyUiLogo: LazyComponent<typeof import("../app/components/ui/Logo.vue")['default']>
export const LazyUiWeather: LazyComponent<typeof import("../app/components/ui/Weather.vue")['default']>
export const LazyUiSvg: LazyComponent<typeof import("../app/components/ui/svg.vue")['default']>
export const LazyContentDoc: LazyComponent<typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentDoc.vue")['default']>
export const LazyContentList: LazyComponent<typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentList.vue")['default']>
export const LazyContentNavigation: LazyComponent<typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentNavigation.vue")['default']>
export const LazyContentQuery: LazyComponent<typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue")['default']>
export const LazyContentRenderer: LazyComponent<typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.vue")['default']>
export const LazyContentRendererMarkdown: LazyComponent<typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentRendererMarkdown.vue")['default']>
export const LazyContentSlot: LazyComponent<typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentSlot.vue")['default']>
export const LazyDocumentDrivenEmpty: LazyComponent<typeof import("../node_modules/@nuxt/content/dist/runtime/components/DocumentDrivenEmpty.vue")['default']>
export const LazyDocumentDrivenNotFound: LazyComponent<typeof import("../node_modules/@nuxt/content/dist/runtime/components/DocumentDrivenNotFound.vue")['default']>
export const LazyMarkdown: LazyComponent<typeof import("../node_modules/@nuxt/content/dist/runtime/components/Markdown.vue")['default']>
export const LazyProseCode: LazyComponent<typeof import("../node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCode.vue")['default']>
export const LazyProseCodeInline: LazyComponent<typeof import("../node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCodeInline.vue")['default']>
export const LazyProsePre: LazyComponent<typeof import("../node_modules/@nuxt/content/dist/runtime/components/Prose/ProsePre.vue")['default']>
export const LazyProseA: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseA.vue")['default']>
export const LazyProseBlockquote: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseBlockquote.vue")['default']>
export const LazyProseEm: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseEm.vue")['default']>
export const LazyProseH1: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH1.vue")['default']>
export const LazyProseH2: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH2.vue")['default']>
export const LazyProseH3: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH3.vue")['default']>
export const LazyProseH4: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH4.vue")['default']>
export const LazyProseH5: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH5.vue")['default']>
export const LazyProseH6: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH6.vue")['default']>
export const LazyProseHr: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseHr.vue")['default']>
export const LazyProseImg: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseImg.vue")['default']>
export const LazyProseLi: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseLi.vue")['default']>
export const LazyProseOl: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseOl.vue")['default']>
export const LazyProseP: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseP.vue")['default']>
export const LazyProseScript: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseScript.vue")['default']>
export const LazyProseStrong: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseStrong.vue")['default']>
export const LazyProseTable: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTable.vue")['default']>
export const LazyProseTbody: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTbody.vue")['default']>
export const LazyProseTd: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTd.vue")['default']>
export const LazyProseTh: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTh.vue")['default']>
export const LazyProseThead: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseThead.vue")['default']>
export const LazyProseTr: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTr.vue")['default']>
export const LazyProseUl: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseUl.vue")['default']>
export const LazyUnoIcon: LazyComponent<typeof import("../node_modules/@unocss/nuxt/runtime/UnoIcon.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtTime: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']>
export const LazyVitePwaManifest: LazyComponent<typeof import("../node_modules/@vite-pwa/nuxt/dist/runtime/components/VitePwaManifest")['default']>
export const LazyNuxtPwaManifest: LazyComponent<typeof import("../node_modules/@vite-pwa/nuxt/dist/runtime/components/VitePwaManifest")['default']>
export const LazyNuxtPwaAssets: LazyComponent<typeof import("../node_modules/@vite-pwa/nuxt/dist/runtime/components/NuxtPwaAssets")['default']>
export const LazyPwaAppleImage: LazyComponent<typeof import("../node_modules/@vite-pwa/nuxt/dist/runtime/components/PwaAppleImage.vue")['default']>
export const LazyPwaAppleSplashScreenImage: LazyComponent<typeof import("../node_modules/@vite-pwa/nuxt/dist/runtime/components/PwaAppleSplashScreenImage.vue")['default']>
export const LazyPwaFaviconImage: LazyComponent<typeof import("../node_modules/@vite-pwa/nuxt/dist/runtime/components/PwaFaviconImage.vue")['default']>
export const LazyPwaMaskableImage: LazyComponent<typeof import("../node_modules/@vite-pwa/nuxt/dist/runtime/components/PwaMaskableImage.vue")['default']>
export const LazyPwaTransparentImage: LazyComponent<typeof import("../node_modules/@vite-pwa/nuxt/dist/runtime/components/PwaTransparentImage.vue")['default']>
export const LazyNuxtLinkLocale: LazyComponent<typeof import("../node_modules/@nuxtjs/i18n/dist/runtime/components/NuxtLinkLocale")['default']>
export const LazySwitchLocalePathLink: LazyComponent<typeof import("../node_modules/@nuxtjs/i18n/dist/runtime/components/SwitchLocalePathLink")['default']>
export const LazyMDC: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/MDC.vue")['default']>
export const LazyMDCRenderer: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/MDCRenderer.vue")['default']>
export const LazyMDCSlot: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/MDCSlot.vue")['default']>
export const LazyColorScheme: LazyComponent<typeof import("../node_modules/@nuxtjs/color-mode/dist/runtime/component.vue3.vue")['default']>
export const LazyIcon: LazyComponent<typeof import("../node_modules/@nuxt/icon/dist/runtime/components/index")['default']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>>

export const componentNames: string[]
