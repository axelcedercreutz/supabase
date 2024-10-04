/**
 * Pageview information.
 * @group Common
 */
export interface CommonEvents {
    /**
     * Any page is viewed by a user.
     * 
     * @source client-side www, client-side studio, client-side docs
     */
    pageview: {
        /**
         * The URL of the page.
         */
        current_url: string,
        /**
         * The title of the page.
         */
        page_title: string,
        /**
         * The path of the page.
         */
        pathname: string,
        /**
         * UTM source parameter. Optional.
         */
        utm_source: string | undefined,
        /**
         * UTM medium parameter. Optional.
         */
        utm_medium: string | undefined,
        /**
         * UTM campaign parameter. Optional.
         */
        utm_campaign: string | undefined,
        /**
         * UTM term parameter. Optional.
         */
        utm_term: string | undefined,
        /**
         * UTM content parameter. Optional.
         */
        utm_content: string | undefined,
        /**
         * The referrer of the page. Optional.
         */
        referrer: string | undefined,
    },
    /**
     * A user leaves the application.
     * 
     * @source client-side www, client-side studio, client-side docs
     */
    pageleave: {
        /**
         * The URL of the page.
         */
        current_url: string,
        /**
         * The path of the page.
         */
        pathname: string,
    }
}