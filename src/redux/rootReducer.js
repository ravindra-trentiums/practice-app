import {all} from 'redux-saga/effects';
import {combineReducers} from 'redux';

import * as auth from '../app/modules/Auth/_redux/authRedux';
import {customersSlice} from '../app/modules/ECommerce/_redux/customers/customersSlice';
import {pagesSlice} from '../app/pages/_redux/pages/pagesSlice';
import {ordersSlice} from '../app/modules/Orders/_redux/orders/ordersSlice';
import {courseCategorySlice} from '../app/modules/CourseCategory/_redux/courseCategory/courseCategorySlice';
import {formLeadsSlice} from '../app/modules/FormLeads/_redux/formLeads/formLeadsSlice';
import {announcementsSlice} from '../app/modules/Announcement/_redux/announcements/announcementsSlice';
import {instructorSlice} from '../app/modules/Instructors/_redux/instructors/instructorSlice';
import {studentsSlice} from '../app/modules/Students/_redux/students/studentsSlice';
import {batchesSlice} from '../app/modules/Course/_redux/coursebatches/batchesSlice';
import {testimonialsSlice} from '../app/modules/Testimonials/_redux/testimonials/testimonialsSlice';
import {activitySlice} from '../app/modules/ActivityLogs/_redux/activitylogs/activitySlice';
import {settingsSlice} from '../app/modules/Settings/_redux/settings/settingsSlice';
import {adminUsersSlice} from '../app/modules/AdminUsers/_redux/adminUsers/adminUsersSlice';
import {offersSlice} from '../app/modules/Offers/_redux/offers/offersSlice';
import {toolsSlice} from '../app/modules/ToolsModule/_redux/customers/toolsSlice';
import {keySkillSlice} from '../app/modules/KeySkill/_redux/keySkill/keySkillSlice';
import {pageSlice} from '../app/modules/Page/_redux/page/pageSlice';
import {tagSlice} from '../app/modules/Tags/_redux/tag/tagSlice';
import {jobRoleSlice} from '../app/modules/JobRoles/_redux/job-role/jobRoleSlice';

export const rootReducer = combineReducers({
  auth: auth.reducer,
  customers: customersSlice.reducer,
  pages: pagesSlice.reducer,
  orders: ordersSlice.reducer,
  courseCategories: courseCategorySlice.reducer,
  formLeads: formLeadsSlice.reducer,
  announcements: announcementsSlice.reducer,
  instructors: instructorSlice.reducer,
  students: studentsSlice.reducer,
  batches: batchesSlice.reducer,
  testimonials: testimonialsSlice.reducer,
  activityLogs: activitySlice.reducer,
  settings: settingsSlice.reducer,
  adminUsers: adminUsersSlice.reducer,
  offers: offersSlice.reducer,
  tools: toolsSlice.reducer,
  keySkills: keySkillSlice.reducer,
  pageSlice: pageSlice.reducer,
  tags: tagSlice.reducer,
  jobRoles: jobRoleSlice.reducer,
});

export function* rootSaga() {
  yield all([auth.saga()]);
}
