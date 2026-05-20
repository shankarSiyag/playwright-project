export interface LeadData {
    // === Mandatory fields ===
    lastName: string;
    status: string;

    // === Optional fields ===
    company?: string;
    firstName?: string;
    jobTitle?: string;
    website?: string;
    leadSource?: string;
    industry?: string;
    phone?: string;
    notes?: string;
    address?: {
        street?: string;
        city?: string;
        state?: string;
        zipCode?: string;
        country?: string;
    };
}