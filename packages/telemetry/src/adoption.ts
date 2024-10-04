/**
 * Represents the various events related to adoptation.
 * @group Adoptation
 */

export interface AdoptationEvents {
    /**
     * A user succesfully signs in to the dashboard.
     * @source server-side
     */
    sign_in:{},
    /**
     * A user succesfully logs out from the dashboard.
     * @source server-side
     */
    logged_out:{},
    /**
     * A table is created to the database.
     * @source server-side
     */
    database_table_created:{},
    /**
     * A function is created to the database.
     * @source server-side
     */
    database_function_created:{},
    /**
     * A trigger is created to the database.
     * @source server-side
     */
    database_trigger_created:{},
    /**
     * An extension is enabled to the database.
     * @source server-side
     */
    database_extension_enabled:{},
    /**
     * An index is created to the database.
     * @source server-side
     */
    database_index_created:{},
    /**
     * The project's Postgres version is upgraded.
     * @source server-side
     */
    database_upgraded:{},
    /**
     * An authetication user is added.
     * @source server-side
     */
    authentication_user_added:{},
    /**
     * A storage bucket is created.
     * @source server-side
     */
    storage_bucket_created:{},
    /**
     * An edge function is created.
     * @source server-side
     */
    edge_function_created:{},
    /**
     * User enter and submitted a query in our AI assistant.
     * @source client-side studio
     */
    ai_suggestion_asked:{},
    /**
     * User accepted a suggestion from our AI assistant.
     * @source client-side studio
     */
    ai_suggestion_accepted:{},
    /**
     * User copied a suggestion from our AI assistant.
     * @source client-side studio
     */
    ai_suggestion_copied:{},
    /**
     * Insert code suggestion from our AI assistant.
     * @source client-side studio
     */
    ai_suggestion_inserted:{},
    /**
     * User rejected a suggestion from our AI assistant.
     * @source client-side studio
     */
    ai_suggestion_rejected:{},
    /**
     * User replaced a suggestion from our AI assistant.
     * @source client-side studio
     */
    ai_suggestion_replaced:{},
    /**
     * Voted Yes or No in docs feedback on Is this helpful?
     * @source client-side docs
     */
    feedback_voted:{},
    /**
     * The user has submitted feedback.
     * @source client-side studio
     */
    feedback_sent:{},
    /**
     * Select and started listening to a channel in realtime from the choose channel popup.
     * @source client-side studio
     */
    start_listening_to_channel_clicked:{},
    /**
     * Clicked copy as JSON button in SQL editor in dashboard.
     * @source client-side studio
     */
    sql_copy_as_json_clicked:{},
    /**
     * Clicked copy as Markdown button in SQL editor in dashboard.
     * @source client-side studio
     */
    sql_copy_as_markdown_clicked:{},
    /**
     * Clicked download CSV button in SQL editor in dashboard.
     * 
     * @source client-side studio
     */
    sql_download_csv_clicked:{},
    /**
     * A SQL query is entered and submitted.
     * @source client-side studio
     */
    sql_query_submitted:{},
    /**
     * Clicked on a SQL quickstart card in studio, title will be in label.
     * 
     * @source client-side studio
     */
    sql_quickstart_clicked:{},
    /**
     * Clicked on a SQL template card in studio, title will be in label.
     * 
     * @source client-side studio
     */
    sql_template_script_clicked:{},
    /**
     * Clicked on a specific message in realtime inspector in dashboard.
     * 
     * @source client-side studio
     */
    specific_message_clicked:{},
    /**
     * Invitation to join an organization is sent.
     * 
     * @source client-side studio
     */
    user_invitation_sent:{}
}