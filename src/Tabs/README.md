---
title: 'Tabs'
type: 'component'
components:
- Tabs
- Tab
categories:
- Navigation
status: 'Stable'
designStatus: 'Done'
devStatus: 'Done'
---

<p>
  This is a pass through component from React-Bootstrap.<br/>
  <a href="https://react-bootstrap-v4.netlify.app/components/tabs/" target="_blank" rel="noopener noreferrer">
    See React-Bootstrap for documentation.
  </a>
</p>

## Uncontrolled usage

```jsx live
<Tabs
  variant="tabs"
  defaultActiveKey="profile"
  id="uncontrolled-tab-example"
>
  <Tab eventKey="home" title="Home">
    Hello I am the first panel.
  </Tab>
  <Tab eventKey="profile" title="Profile">
    Hello I am the second panel.
  </Tab>
  <Tab eventKey="contact" title="Contact" disabled>
    Hello I am third first panel.
  </Tab>
</Tabs>
```

## Controlled usage

```jsx live
() => {
  const [key, setKey] = useState('home');

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
    >
      <Tab eventKey="home" title="Home">
        Hello I am the first panel.
      </Tab>
      <Tab eventKey="profile" title="Profile">
        Hello I am the second panel.
      </Tab>
      <Tab eventKey="contact" title="Contact" disabled>
        Hello I am third first panel.
      </Tab>
    </Tabs>
  );
}
```

## Button group usage

```jsx live
<Tabs
  defaultActiveKey="profile"
  id="uncontrolled-pills-tab-example"
  variant="button-group"
>
  <Tab eventKey="home" title="Home">
    Hello I am the first panel.
  </Tab>
  <Tab eventKey="profile" title="Profile">
    Hello I am the second panel.
  </Tab>
  <Tab eventKey="contact" title="Contact" disabled>
    Hello I am third first panel.
  </Tab>
</Tabs>
```

## Pills usage

```jsx live
<Tabs
  defaultActiveKey="profile"
  id="uncontrolled-pills-tab-example"
  variant="pills"
>
  <Tab eventKey="home" title="Home">
    Hello I am the first panel.
  </Tab>
  <Tab eventKey="profile" title="Profile">
    Hello I am the second panel.
  </Tab>
  <Tab eventKey="contact" title="Contact" disabled>
    Hello I am third first panel.
  </Tab>
</Tabs>
```

## Inverse-Pills usage

```jsx live
<Stack className="bg-dark-700 p-4">
  <Tabs
    variant="inverse-pills"
    defaultActiveKey="profile"
    id="uncontrolled-pills-tab-example"
  >
    <Tab eventKey="home" title="Home">
      Hello I am the first panel.
    </Tab>
    <Tab eventKey="profile" title="Profile">
      Hello I am the second panel.
    </Tab>
    <Tab eventKey="contact" title="Contact" disabled>
      Hello I am third first panel.
    </Tab>
  </Tabs>
</Stack>
```

## Inverse Tabs usage

```jsx live
<Stack className="bg-dark-700 p-4">
  <Tabs
    variant="inverse-tabs"
    defaultActiveKey="profile"
    id="uncontrolled-pills-tab-example"
  >
    <Tab eventKey="home" title="Home">
      Hello I am the first panel.
    </Tab>
    <Tab eventKey="profile" title="Profile">
      Hello I am the second panel.
    </Tab>
    <Tab eventKey="contact" title="Contact" disabled>
      Hello I am third first panel.
    </Tab>
  </Tabs>
</Stack>
```

## With notification

```jsx live
<Tabs defaultActiveKey="profile" id="tab-example-with-notification">
  <Tab eventKey="home" title="Home">
    Hello I am the first panel.
  </Tab>
  <Tab eventKey="profile" title="Profile" notification={1}>
    Hello I am the second panel.
  </Tab>
</Tabs>
```

### With screen reader text in notification

```jsx live
<Tabs defaultActiveKey="profile" id="tab-example-with-sr-notification">
  <Tab eventKey="home" title="Home">
    Hello I am the first panel.
  </Tab>
  <Tab
    eventKey="profile" 
    title="Profile" 
    notification={(
      <span>
        1
        <span className="sr-only">notification</span>
      </span>
    )}
  >
    Hello I am the second panel.
  </Tab>
</Tabs>
```

### Responsive support

```jsx live
<Tabs
  variant="tabs"
  defaultActiveKey="profile"
  id="uncontrolled-tab-example"
>
  <Tab eventKey="home" title="Home">
    Hello I am the first panel.
  </Tab>
  <Tab eventKey="dashboard" title="Dashboard">
    Hello I am the second panel.
  </Tab>
  <Tab eventKey="profile" title="Profile" notification={1}>
    Hello I am the third panel.
  </Tab>
  <Tab eventKey="products" title="Products">
    Hello I am the fourth panel.
  </Tab>
  <Tab eventKey="help" title="Help">
    Hello I am the fifth panel.
  </Tab>
  <Tab eventKey="about" title="About">
    Hello I am the sixth panel.
  </Tab>
  <Tab eventKey="updates" title="Updates">
    Hello I am the seventh panel.
  </Tab>
  <Tab eventKey="forum" title="Forum">
    Hello I am the eighth panel.
  </Tab>
  <Tab eventKey="job" title="Job">
    Hello I am the ninth panel.
  </Tab>
  <Tab eventKey="team" title="Our team">
    Hello I am the tenth panel.
  </Tab>
</Tabs>
```

## Conditional rendering

```jsx live
() => {
  const librariesEnabled = true;
  const visibleTabs = useMemo(() => {
    const tabs = [];
        
    tabs.push(
      <Tab
        key="courses"
        eventKey="courses"
        title="Courses"
      >
        Hello I am the courses panel.
      </Tab>
    );

    tabs.push(
      <Tab
        key="programs"
        eventKey="programs"
        title="Programs"
      >
        Hello I am the programs panel.
      </Tab>
    );
    
    if (librariesEnabled) {
      tabs.push(
        <Tab
          key="libraries"
          eventKey="libraries"
          title="Libraries"
        >
          Hello I am the libraries panel.
        </Tab>
      );   
    }

    return tabs;
  }, [librariesEnabled]);

  return (
    <Tabs
      id="tabs"
      defaultActiveKey="courses"
    >
      {visibleTabs}
    </Tabs>
  );
}
```
