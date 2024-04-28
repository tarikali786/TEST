import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import programReducer from "../features/program/programSlice";
/* import depositReducer from "../features/deposit/depositSlice";
import withdrawalReducer from "../features/withdrawal/withdrawalSlice";
import transactionsReducer from "../features/Transactions/transactionsSlice"; */
import adminUsersReducer from "../admin/features/users/usersSlice";
import adminKycLogsReducer from "../admin/features/kyc/kycSlice";
import adminProfitConfigReducer from "../admin/features/investmentPackages/investmentPackagesSlice";
import admintransctionReducer from "../admin/features/transactions/transactionsSlice";
import claimedRewardsReducer from "../admin/features/claimRewards/claimRewardsSlice";
import analyticsReducer from "../admin/features/dashboard/dashboardSlice";
import announcementsReducer from "../admin/features/announcements/announcementsSlice";

export const store = configureStore({
  reducer: {
    /* transction:transactionsReducer,
    withdrawal: withdrawalReducer,*/
    announcements: announcementsReducer,
    analytics: analyticsReducer,
    claimedRewards: claimedRewardsReducer,
    profitConfig: adminProfitConfigReducer,
    transactions: admintransctionReducer,
    kycLogs: adminKycLogsReducer,
    program: programReducer,
    auth: authReducer,
    users: adminUsersReducer, //admin starts here
  },
});
