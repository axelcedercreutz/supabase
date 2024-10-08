/**
 * Improve User Onboarding and Activation Rate
 * @module Activation
 */

/**
 * A new organization is created.
 * @group Events
 * @source server-side
 */
export type organization_created = never
/**
 * An organization is removed.
 * @group Events
 * @source server-side
 * */
export type organization_removed = never
/**
 * An organization is updated.
 * @group Events
 * @source server-side
 */
export type organization_updated = never
/**
 * A new project is created.
 * @group Events
 * @source server-side
 */
export type project_created = never
/**
 * A project is restored.
 * @group Events
 * @source server-side
 */
export type project_restored = never
/**
 * A project is removed.
 * @group Events
 * @source server-side
 */
export type project_removed = never
/**
 * A project is updated.
 * @group Events
 * @source server-side
 */
export type project_updated = never
/**
 * New user signs up successfully.
 * @group Events
 * @source client-side studio
 */
export type sign_up = never
/**
 * New user signs up successfully.
 * @group Events
 * @source client-side studio
 */
export type example_project_clicked = never
/**
 * The "Help" -button is clicked.
 * @group Events
 * @source client-side studio
 */
export type help_clicked = never
/**
 * The project connection options are opened.
 * @group Events
 * @source client-side studio
 */
export type connect_project_clicked = never
/**
 * Data to a database table is submitted.
 * @group Events
 * @source client-side studio
 */
export type import_table_data_clicked = never

/**
 * Event that's used to combine all activation events.
 * Hidden from the docs as it's only meant to be used for type-checking.
 * @hidden
 */
export type ActivationEvents = {
  organization_created: organization_created
  organization_removed: organization_removed
  organization_updated: organization_updated
  project_created: project_created
  project_restored: project_restored
  project_removed: project_removed
  project_updated: project_updated
  sign_up: sign_up
  example_project_clicked: example_project_clicked
  help_clicked: help_clicked
  connect_project_clicked: connect_project_clicked
  import_table_data_clicked: import_table_data_clicked
}
