import deals from '/BakesaleApi/deals.json';
import dealdetails from '/BakesaleApi/deal-details.json';

export default {
    fetchInitialDeals() {
        return deals;
    },
    fetchDealDetail(dealId) {
        return dealdetails[dealId];
    },
};