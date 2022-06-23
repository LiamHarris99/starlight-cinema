const menuNav = [
  {
    text: 'Trang chủ',
    url: '/'
  },
  {
    text: 'Phim',
    url: '/films'
  },
  {
    text: 'Khuyến mãi',
    url: '/hot'
  },
  {
    text: 'Điện ảnh',
    url: '/news'
  },
  {
    text: 'Liên hệ',
    url: '/contact'
  }
];

const baseMenuUser = [
  {
    text: "FAQ's",
    url: '/FAQ'
  }
];

const menuUser = [
  ...baseMenuUser,
  {
    text: 'Đăng nhập',
    url: '/login'
  },
  {
    text: 'Đăng ký',
    url: '/register'
  }
];

const menuFooter = [
  {
    url: '/contact',
    text: 'Điều khoản chung'
  },
  {
    url: '/contact',
    text: 'Chính Sách Thanh Toán'
  },
  {
    url: '/contact',
    text: 'Chính Sách Bảo Mật'
  },
  {
    url: '/contact',
    text: 'Chính Sách Bảo Mật'
  },
  {
    url: '/contact',
    text: 'Chính Sách Thanh Toán'
  },
  {
    url: '/contact',
    text: 'Điều khoản chung'
  }
];

const menuLoggedIn = (name) => [
  ...baseMenuUser,
  {
    text: name,
    url: '/profile'
  },
  {
    text: 'Đăng xuất',
    url: '/logout'
  }
];

export { menuNav, menuUser, menuFooter, menuLoggedIn };
