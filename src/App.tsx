import { useEffect, useState } from 'react';
import {
  Layout,
  Menu,
  Card,
  Typography,
  Timeline,
  Button,
  Tag,
  Divider,
  Row,
  Col,
  Anchor,
  Space,
  BackTop,
  Grid
} from 'antd';
import {
  ClockCircleOutlined,
  CompassOutlined,
  CarOutlined,
  EnvironmentOutlined,
  TeamOutlined,
  CheckCircleOutlined,
  DollarOutlined,
  RocketOutlined,
  ScheduleOutlined
} from '@ant-design/icons';
import { itinerary, keyTimes, navigationLinks, tips } from './data/itinerary';
import './App.css';

const { Header, Content, Footer } = Layout;
const { Title, Text, Paragraph } = Typography;
const { useBreakpoint } = Grid;

// 关键时刻图标映射
const getTimeIcon = (icon: string) => {
  switch (icon) {
    case 'flight':
      return <ScheduleOutlined style={{ color: '#1890ff' }} />;
    case 'train':
      return <RocketOutlined style={{ color: '#52c41a' }} />;
    case 'car':
      return <CarOutlined style={{ color: '#faad14' }} />;
    default:
      return <ClockCircleOutlined />;
  }
};

// 导航链接图标映射
const getNavIcon = (icon: string) => {
  switch (icon) {
    case 'hotel':
      return <span style={{ fontSize: 20 }}>🏨</span>;
    case 'scenic':
      return <span style={{ fontSize: 20 }}>🏞️</span>;
    case 'coffee':
      return <span style={{ fontSize: 20 }}>☕</span>;
    case 'train':
      return <span style={{ fontSize: 20 }}>🚉</span>;
    default:
      return <EnvironmentOutlined style={{ fontSize: 20, color: '#1890ff' }} />;
  }
};

// 贴士图标映射
const getTipIcon = (icon: string) => {
  switch (icon) {
    case 'car':
      return <CarOutlined style={{ fontSize: 24, color: '#1890ff' }} />;
    case 'clock':
      return <ClockCircleOutlined style={{ fontSize: 24, color: '#52c41a' }} />;
    case 'team':
      return <TeamOutlined style={{ fontSize: 24, color: '#722ed1' }} />;
    case 'check':
      return <CheckCircleOutlined style={{ fontSize: 24, color: '#faad14' }} />;
    case 'money':
      return <DollarOutlined style={{ fontSize: 24, color: '#eb2f96' }} />;
    default:
      return <CompassOutlined style={{ fontSize: 24 }} />;
  }
};

function App() {
  const [current, setCurrent] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const screens = useBreakpoint();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { key: 'overview', label: <a href="#overview">行程概览</a> },
    { key: 'itinerary', label: <a href="#itinerary">详细行程</a> },
    { key: 'keytimes', label: <a href="#keytimes">关键信息</a> },
    { key: 'tips', label: <a href="#tips">实用贴士</a> },
  ];

  return (
    <Layout className="app-layout">
      <Header
        className={`app-header ${scrolled ? 'scrolled' : ''}`}
        style={{
          position: 'fixed',
          zIndex: 1000,
          width: '100%',
          background: scrolled ? 'rgba(255,255,255,0.95)' : 'transparent',
          boxShadow: scrolled ? '0 2px 8px rgba(0,0,0,0.06)' : 'none',
          transition: 'all 0.3s ease'
        }}
      >
        <div className="header-content">
          <div className="logo">
            <span className="logo-icon">🏔️</span>
            <span className="logo-text">山水墨韵</span>
          </div>
          <Menu
            mode="horizontal"
            selectedKeys={[current]}
            onClick={(e) => setCurrent(e.key)}
            items={menuItems}
            style={{
              flex: 1,
              justifyContent: 'flex-end',
              border: 'none',
              background: 'transparent'
            }}
          />
        </div>
      </Header>

      <Content>
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-background">
            <div className="mountain-layer layer-1"></div>
            <div className="mountain-layer layer-2"></div>
            <div className="mountain-layer layer-3"></div>
          </div>
          <div className="hero-content">
            <div className="hero-badge">广西 · 崇左</div>
            <Title level={1} className="hero-title">山水墨韵</Title>
            <Text className="hero-subtitle">喀斯特地形的诗意漫游</Text>

            <div className="hero-days">
              {itinerary.map((day) => (
                <Button
                  key={day.key}
                  type="default"
                  href={`#${day.key}`}
                  className="day-btn"
                >
                  <Tag color="green">{`D${day.day}`}</Tag>
                  {day.route[day.route.length === 3 ? 1 : 0]}
                </Button>
              ))}
            </div>

            <div className="hero-quick-nav">
              <a href="#overview">概览</a>
              <span>/</span>
              <a href="#keytimes">时刻</a>
              <span>/</span>
              <a href="#nav-links">导航</a>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section id="overview" className="section overview-section">
          <div className="section-container">
            <div className="section-header">
              <Text type="secondary" className="section-label">Trip Overview</Text>
              <Title level={2} className="section-title">行程概览</Title>
              <Text type="secondary">穿越广西边陲秘境，探寻喀斯特山水画卷</Text>
            </div>

            <Timeline
              mode={screens.md ? 'alternate' : 'left'}
              items={itinerary.map((day) => ({
                color: 'green',
                children: (
                  <Card
                    size="small"
                    className="overview-card"
                    hoverable
                  >
                    <div className="overview-card-header">
                      <Tag color="green">{`第${day.day}天`}</Tag>
                      <Text type="secondary">{day.date}</Text>
                    </div>
                    <Title level={5}>{day.title}</Title>
                    <div className="overview-route">
                      {day.route.map((place, index) => (
                        <span key={index}>
                          {place}
                          {index < day.route.length - 1 && ' → '}
                        </span>
                      ))}
                    </div>
                  </Card>
                ),
              }))}
            />
          </div>
        </section>

        {/* Itinerary Section */}
        <section id="itinerary" className="section itinerary-section">
          <div className="section-container">
            <div className="section-header">
              <Text type="secondary" className="section-label">Daily Itinerary</Text>
              <Title level={2} className="section-title">详细行程</Title>
              <Text type="secondary">每一天都是一幅流动的山水画卷</Text>
            </div>

            <Anchor offsetTop={80} targetOffset={100}>
              {itinerary.map((day) => (
                <div key={day.key} id={day.key} className="day-section">
                  <Card className="day-card">
                    <div className="day-header">
                      <div className="day-badge">
                        <Tag color="gold" className="day-tag">{`D${day.day}`}</Tag>
                        <div className="day-info">
                          <Text className="day-date">{day.date} · {day.weekday}</Text>
                          <Title level={4} className="day-title">{day.title}</Title>
                        </div>
                      </div>
                      <div className="day-route">
                        <EnvironmentOutlined />
                        {day.route.map((place, index) => (
                          <span key={index}>
                            {place}
                            {index < day.route.length - 1 && <span className="route-arrow"> → </span>}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="day-content">
                      {day.slots.map((slot, index) => (
                        <div key={index} className="time-slot">
                          <div className="time-label">{slot.time}</div>
                          <div className="slot-content">
                            <div className="slot-header">
                              <Title level={5}>{slot.title}</Title>
                              {slot.tag && <Tag color="blue">{slot.tag}</Tag>}
                            </div>
                            <Paragraph>{slot.description}</Paragraph>
                            {slot.features && (
                              <div className="feature-tags">
                                {slot.features.map((feature, i) => (
                                  <Tag key={i}>{feature}</Tag>
                                ))}
                              </div>
                            )}
                            {slot.distance && (
                              <Tag color="cyan" icon={<CarOutlined />}>{slot.distance}</Tag>
                            )}
                            {slot.food && (
                              <div className="food-section">
                                <Text type="secondary">🍽️ 美食推荐</Text>
                                <div className="food-tags">
                                  {slot.food.map((food, i) => (
                                    <Tag key={i} color="orange">{food}</Tag>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>
              ))}
            </Anchor>
          </div>
        </section>

        {/* Key Times & Navigation Section */}
        <section id="keytimes" className="section key-section">
          <div className="section-container">
            <div className="section-header">
              <Text type="secondary" className="section-label">Key Information</Text>
              <Title level={2} className="section-title">关键信息</Title>
              <Text type="secondary">行程关键时刻 & 目的地快捷导航</Text>
            </div>

            <Row gutter={[24, 24]}>
              <Col xs={24} lg={10}>
                <Card
                  title={
                    <Space>
                      <ClockCircleOutlined style={{ color: '#1890ff' }} />
                      <span>关键时刻表</span>
                    </Space>
                  }
                  className="key-card"
                >
                  <div className="time-table">
                    {keyTimes.map((item, index) => (
                      <div key={index} className="time-row">
                        <div className="time-event">
                          {getTimeIcon(item.icon)}
                          <span className="time-name">{item.event}</span>
                        </div>
                        <span className="time-value">{item.time}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </Col>

              <Col xs={24} lg={14}>
                <Card
                  id="nav-links"
                  title={
                    <Space>
                      <CompassOutlined style={{ color: '#52c41a' }} />
                      <span>快捷导航</span>
                    </Space>
                  }
                  className="key-card"
                >
                  <Row gutter={[12, 12]}>
                    {navigationLinks.map((link, index) => (
                      <Col xs={12} sm={12} md={12} key={index}>
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="nav-btn"
                        >
                          <div className="nav-icon">{getNavIcon(link.icon)}</div>
                          <div className="nav-info">
                            <span className="nav-name">{link.name}</span>
                            <span className="nav-addr">{link.address}</span>
                          </div>
                          <span className="nav-arrow">→</span>
                        </a>
                      </Col>
                    ))}
                  </Row>
                </Card>
              </Col>
            </Row>
          </div>
        </section>

        {/* Tips Section */}
        <section id="tips" className="section tips-section">
          <div className="section-container">
            <div className="section-header">
              <Text type="secondary" className="section-label">Practical Tips</Text>
              <Title level={2} className="section-title">实用贴士</Title>
              <Text type="secondary">让旅途更加顺畅的关键信息</Text>
            </div>

            <Row gutter={[24, 24]}>
              {tips.map((tip, index) => (
                <Col xs={24} md={12} lg={8} key={index}>
                  <Card className="tip-card" hoverable>
                    <div className="tip-header">
                      {getTipIcon(tip.icon)}
                      <Title level={5} style={{ margin: 0 }}>{tip.title}</Title>
                    </div>
                    <Divider style={{ margin: '12px 0' }} />
                    <ul className="tip-list">
                      {tip.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </section>
      </Content>

      <Footer className="app-footer">
        <Paragraph className="footer-quote">山水之间，自有诗意</Paragraph>
        <Text type="secondary">愿这次广西之行，成为你记忆中最美的山水画卷 🏔️</Text>
      </Footer>

      <BackTop />
    </Layout>
  );
}

export default App;