/**
 * Improve User Conversion and Signup Rate
 * @module Acquisition
 */

/**
 * The user clicked the "Sign in" -button.
 * @group Events
 * @sources client-side www
 */
export type sign_in_clicked = never
/**
 * The user clicked the "Start project" -button.
 * @group Events
 * @sources client-side www
 */
export type start_project_clicked = never
/**
 * The user clicked the "Request demo" -button.
 * @group Events
 * @sources client-side www
 */
export type request_demo_clicked = never
/**
 * The user submitted the "Request demo" form.
 * @group Events
 * @sources client-side www
 */
export type request_demo_form_submit = never
/**
 * The user clicked the "Github stars" -button.
 * @group Events
 * @sources client-side www
 */
export type github_clicked = never

/**
 * The user clicked a plan's CTA -button.
 * @group Events
 * @sources client-side www
 */
export type plan_cta_clicked = never
/**
 * The user clicked the "See documentation" -button.
 * @group Events
 * @sources client-side www
 */
export type see_documentation_clicked = never
/**
 * The user clicked the "Contact enterprise sales" -button.
 * @group Events
 * @sources client-side www
 */
export type contact_enterprise_clicked = never
/**
 * A subhero product card is clicked. The type is passed as a property
 * @group Events
 * @sources client-side www
 */
export type product_card_clicked = never
/**
 * A project template is clicked. The project is passed as a property.
 * @group Events
 * @sources client-side www
 */
export type project_template_clicked = never
/**
 * A customer story card is clicked. The customer is passed as a property.
 * @group Events
 * @sources client-side www
 */
export type customer_card_clicked = never
/**
 * "Open a github issue" -button clicked
 * @group Events
 * @sources client-side www
 */
export type github_issue_open_clicked = never
/**
 * "Request a feature" -button clicked
 * @group Events
 * @sources client-side www
 */
export type github_request_feature_clicked = never
/**
 * A open sources project is clicked. The open sources project is passed as a property.
 * @group Events
 * @sources client-side www
 */
export type open_source_project_clicked = never

/**
 * Event that's used to combine all acquisition events.
 * Hidden from the docs as it's only meant to be used for type-checking.
 * @hidden
 */
export type AcquisitionEvents = {
  sign_in_clicked: sign_in_clicked
  start_project_clicked: start_project_clicked
  request_demo_clicked: request_demo_clicked
  request_demo_form_submit: request_demo_form_submit
  github_clicked: github_clicked
  plan_cta_clicked: plan_cta_clicked
  see_documentation_clicked: see_documentation_clicked
  contact_enterprise_clicked: contact_enterprise_clicked
  product_card_clicked: product_card_clicked
  project_template_clicked: project_template_clicked
  customer_card_clicked: customer_card_clicked
  github_issue_open_clicked: github_issue_open_clicked
  github_request_feature_clicked: github_request_feature_clicked
  open_source_project_clicked: open_source_project_clicked
}
