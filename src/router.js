import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home/Home.vue'

/**
 * Test Routings Start
 */

import LoginView from './views/Login/LoginView'; 
import SignupView from './views/Signup/SignupView'; 
import SignupForm from './views/Signup/SignupForm'; 
import FinishView from './views/Signup/FinishView'; 

import FindID from './views/FindAccount/FindID'; 
import ResultID from './views/FindAccount/ResultID'; 
import FindPass from './views/FindAccount/FindPass'; 
import ResetPass from './views/FindAccount/ResetPass'; 

import Step_1 from './views/CreateProject/Step_1'; 
import Step_2 from './views/CreateProject/Step_2'; 
import Step_3 from './views/CreateProject/Step_3'; 
import Step_4 from './views/CreateProject/Step_4'; 
import Step_5 from './views/CreateProject/Step_5'; 
import Step_6 from './views/CreateProject/Step_6'; 
import Step_7 from './views/CreateProject/Step_7_Preview'; 
import Step_8 from './views/CreateProject/Step_8_Finish'; 

import DonateSucceedView from './views/Donate/SucceedView'; 

import ProjectLayout from './views/Project/ProjectLayout'; 

import MyProjectPage from './views/MyProjectPage/MyProjectPage'; 
import MyReviewPage from './views/MyProjectPage/MyReviewPage'; 

import ReviewLayout from './views/Review/ReviewLayout'; 
import FollowerLayout from './views/Followers/FollowerLayout'; 

import ReviewForm from './views/Review/ReviewForm';


import MyMenu from './views/MyPage/MyMenu'; 
import EditProfile from './views/MyPage/EditProfile'; 
import Settings from './views/MyPage/Settings'; 
import IgnoreList from './views/MyPage/IgnoreList'; 

import PaymentInfo from './views/MyPage/PaymentInfo'; 
import PaymentForm from './views/MyPage/PaymentForm'; 
import RewardForm from './views/MyPage/RewardForm'; 

import ProjectManage from './views/MyPage/ProjectManage'; 
import UpdateLayout from './views/Project/UpdateLayout'; 
import UpdateAfter from './views/Project/UpdateAfter'; 
import DonateList from './views/MyPage/DonateList'; 

import RewardsView from './views/MyPage/Reward/RewardsView'; 
import RewardsWaits from './views/MyPage/Reward/RewardsWaits'; 

import PrivateReqList from './views/MyPage/Request/PrivateReqList'; 
import PrivateReqForm from './views/MyPage/Request/PrivateReqForm'; 



Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      component: LoginView
    },
    {
      path: '/signup', 
      component: SignupView
    },
    {
      path: '/signup/input', 
      component: SignupForm
    },
    {
      path: '/signup/complete', 
      component: FinishView
    },
    {
      path: '/find/account/id', 
      component: FindID
    }, 
    {
      path: '/find/account/id/result', 
      component: ResultID
    },
    {
      path: '/find/account/pass', 
      component: FindPass
    },
    {
      path: '/find/account/pass/reset', 
      component: ResetPass
    },
    {
      path: '/create/account/step/1', 
      component: Step_1
    },
    {
      path: '/create/account/step/2', 
      component: Step_2
    },
    {
      path: '/create/account/step/3', 
      component: Step_3
    },
    {
      path: '/create/account/step/4', 
      component: Step_4
    },
    {
      path: '/create/account/step/5', 
      component: Step_5
    },
    {
      path: '/create/account/step/6', 
      component: Step_6
    },
    {
      path: '/create/account/step/7', 
      component: Step_7
    },
    {
      path: '/create/account/step/8', 
      component: Step_8
    },
    {
      path: '/donate/succeed', 
      component: DonateSucceedView
    },
    {
      path: '/project/view', 
      component: ProjectLayout
    },
    {
      path: '/user/myproject', 
      component: MyProjectPage
    }, 
    {
      path: '/user/reviews', 
      component: MyReviewPage
    },
    {
      path: '/user/myproject/review', 
      component: ReviewLayout
    }, 
    {
      path: '/followers', 
      component: FollowerLayout
    }, 
    {
      path: '/review/form', 
      component: ReviewForm
    },
    {
      path: '/hambaga',
      component: MyMenu
    }, 
    {
      path: '/mypage/edit/profile', 
      component: EditProfile
    }, 
    {
      path: '/mypage/settings', 
      component: Settings
    },
    {
      path: '/mypage/ignore', 
      component: IgnoreList
    },
    {
      path: '/paymentinfo', 
      component : PaymentInfo
    },
    {
      path: '/mypage/paymentform', 
      component: PaymentForm
    }, 
    {
      path: '/mypage/rewardform', 
      component: RewardForm
    },
    {
      path: '/project/manage', 
      component: ProjectManage
    }, 
    {
      path: '/project/update', 
      component: UpdateLayout
    }, 
    {
      path: '/project/update/after', 
      component: UpdateAfter
    }, 
    {
      path: '/donation/list', 
      component: DonateList
    }, 
    {
      path: '/reward/list', 
      component: RewardsView
    }, 
    {
      path: '/reward/wait', 
      component: RewardsWaits
    },
    {
      path: '/prevatereq/list', 
      component: PrivateReqList
    }, 
    {
      path: '/prevatereq/form', 
      component: PrivateReqForm
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/about/About.vue')
    // }
  ]
})
