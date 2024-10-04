/**
 * Represents the various events related to activation.
 * @group Activation
 */

export interface ActivationEvents {
    /**
     * A new organization is created.
     * 
     * @source server-side
     */
    organization_created: {},
    /**
     * An organization is removed.
     * 
     * @source server-side
     */
    organization_removed: {},
    /**
     * An organization is updated.
     * 
     * @source server-side
     */
    organization_updated: {},
    /**
     * A new project is created.
     * 
     * @source server-side
     */
    project_created: {},
    /**
     * A project is restored.
     * 
     * @source server-side
     */
    project_restored: {},
    /**
     * A project is removed.
     * 
     * @source server-side
     */
    project_removed: {},
    /**
     * A project is updated.
     * 
     * @source server-side
     */
    project_updated: {},
    /**
     * New user signs up successfully.
     * 
     * @source client-side studio
     */
    sign_up: {},
    /**
     * New user signs up successfully.
     * 
     * @source client-side studio
     */
    example_project_clicked: {},
    /**
     * The "Help" -button is clicked.
     * 
     * @source client-side studio
     */
    help_clicked: {},
    /**
     * The project connection options are opened.
     * 
     * @source client-side studio
     */
    connect_project_clicked: {},
    /**
     * Data to a database table is submitted.
     * 
     * @source client-side studio
     */
    import_table_data_clicked: {}
}