/**
 * Represents the various events related to revenue.
 * @group Revenue
 */
export interface RevenueEvents {
    /**
     * The subscription is canceled.
     * 
     * @source server-side
     */
    subscription_canceled: SubscriptionCanceledProps,
    /**
     * The subscription is upgraded or downgraded.
     * @source client-side studio
     */
    subscription_updated: SubscriptionUpdatedProps,
    /**
     * The upgrade view is opened.
     * 
     * @source client-side studio
     */
    upgrade_cta_clicked: UpgradeCtaClickedProps
}

/**
 * Properties of subscription_canceled event.
 * @group __Helper Types__
 */
export interface SubscriptionCanceledProps {
    /**
     * The name of the canceled plan.
     */
    cancelledPlanName: 'free' | 'pro' | 'team' | 'enterprise',
    /**
     * The value of the canceled plan. In dollars.
     */
    canceledPlanValue: number,
    /**
     * The billing cycle of the canceled plan.
     */
    canceledPlanBillingCycle: 'monthly' | 'yearly',
}

/**
 * Properties of subscription_updated event.
 * @group __Helper Types__
 */
export interface SubscriptionUpdatedProps {
    /**
     * The direction of the change.
     */
    directionOfChange: 'upgrade' | 'downgrade',
    /**
     * The name of the old plan.
     */
    oldPlanName: 'free' | 'pro' | 'team' | 'enterprise',
    /**
     * The value of the old plan. In dollars.
     */
    oldPlanValue: number,
    /**
     * The billing cycle of the old plan.
     */
    oldPlanBillingCycle: 'monthly' | 'yearly',
    /**
     * The name of the new plan.
     */
    newPlanName: 'free' | 'pro' | 'team' | 'enterprise',
    /**
     * The value of the new plan. In dollars.
     */
    newPlanValue: number,
    /**
     * The billing cycle of the new plan.
     */
    newPlanBillingCycle: 'monthly' | 'yearly',
}

/**
 * Properties of upgrade_cta_clicked event.
 * @group __Helper Types__
 */
export interface UpgradeCtaClickedProps {
    /**
     * The placement of the upgrade CTA.
     */
    placement: string,
    /**
     * The name of the plan.
     */
    plan: 'free' | 'pro' | 'team' | 'enterprise',
}