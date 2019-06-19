import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import ManualInvoice from '@/components/ManualInvoice/ManualInvoice'
import ScanInvoice from '@/components/ScanInvoice/ScanInvoice'
import CheckInvoice from '@/components/CheckInvoice/CheckInvoice'
import InvoiceRecord from '@/components/InvoiceRecord/InvoiceRecord'
import GoodsInfo from '@/components/GoodsInfo/GoodsInfo'
import InvoiceInfo from '@/components/InvoiceInfo/InvoiceInfo'
import AddInvoiceDetail from '@/components/AddInvoiceDetail/AddInvoiceDetail'
import ChooseGoods from '@/components/ChooseGoods/ChooseGoods'
import OpeningInvoice from '@/components/OpeningInvoice/OpeningInvoice'
import InvoiceDetail from '@/components/InvoiceDetail/InvoiceDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/manualInvoice',
      name: 'ManualInvoice',
      component: ManualInvoice
    },
    {
      path: '/scanInvoice',
      name: 'ScanInvoice',
      component: ScanInvoice
    },
    {
      path: '/checkInvoice',
      name: 'CheckInvoice',
      component: CheckInvoice
    },
    {
      path: '/invoiceRecord',
      name: 'InvoiceRecord',
      component: InvoiceRecord
    },
    {
      path: '/goodsInfo',
      name: 'GoodsInfo',
      component: GoodsInfo
    },
    {
      path: '/invoiceInfo',
      name: 'InvoiceInfo',
      component: InvoiceInfo
    },
    {
      path: '/addInvoiceDetail',
      name: 'AddInvoiceDetail',
      component: AddInvoiceDetail
    },
    {
      path: '/chooseGoods',
      name: 'ChooseGoods',
      component: ChooseGoods
    },
    {
      path: '/openingInvoice',
      name: 'OpeningInvoice',
      component: OpeningInvoice
    },
    {
      path: '/invoiceDetail',
      name: 'InvoiceDetail',
      component: InvoiceDetail
    },
  ]
})
