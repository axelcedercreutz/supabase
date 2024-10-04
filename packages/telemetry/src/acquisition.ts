
/**
 * Represents the various events related to acquisition.
 * @group Acquisition
 */
export interface AcquisitonEvents {
    /**
     * The user clicked the "Sign in" -button.
     * 
     * @source client-side www
     */
    sign_in_clicked: {},
    /**
     * The user clicked the "Start project" -button.
     * 
     * @source client-side www
     */
    start_project_clicked: {},
    /**
     * The user clicked the "Request demo" -button.
     * 
     * @source client-side www
     */
    request_demo_clicked: {},
    /**
     * The user submitted the "Request demo" form.
     * 
     * @source client-side www
     */
    request_demo_form_submit: {},
    /**
     * The user clicked the "Github stars" -button.
     * 
     * @source client-side www
     */
    github_clicked: {},
    /**
     * The user clicked a plan's CTA -button.
     * 
     * @source client-side www
     */
    plan_cta_clicked: {},
    /**
     * The user clicked the "See documentation" -button.
     * 
     * @source client-side www
     */
    see_documentation_clicked: {},
    /**
     * The user clicked the "Contact enterprise sales" -button.
     * 
     * @source client-side www
     */
    contact_enterprise_clicked: {},
    /**
     * A subhero product card is clicked. The type is passed as a property
     * 
     * @source client-side www
     */
    product_card_clicked: {},
    /**
     * A project template is clicked. The project is passed as a property.
     * 
     * @source client-side www
     */
    project_template_clicked: {},
    /**
     * A customer story card is clicked. The customer is passed as a property.
     * 
     * @source client-side www
     */
    customer_card_clicked: {},
    /**
     * "Open a github issue" -button clicked
     * 
     * @source client-side www
     */
    github_issue_open_clicked: {},
    /**
     * "Request a feature" -button clicked
     * 
     *  @source client-side www 
     */
    github_request_feature_clicked: {},
    /**
     * A open source project is clicked. The open source project is passed as a property.
     * 
     * @source client-side www
     */
    open_source_project_clicked: {},
}