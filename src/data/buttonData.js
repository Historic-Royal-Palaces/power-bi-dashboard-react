const buttonData = [
  // Section: Service Desk
  {
    title: 'Service Desk',
    buttons: [
      {
        label: 'Service Desk Report',
        title: 'IS Ops Service Desk',
        src: 'https://app.powerbi.com/view?r=eyJrIjoiZDEyYWI2OTctOWQ0MS00ZGE1LTg4N2YtZTRmNDQyNDI1MTYzIiwidCI6Ijg0YjhiMDNiLTAyMTYtNGU4MC05NTNjLTA2NTVkMmIxMzMyMSIsImMiOjh9',
        active: true,
      },
      {
        label: 'All PCs Report',
        title: 'IS Ops All PCs',
        src: 'https://app.powerbi.com/view?r=eyJrIjoiYmQwMzQ0YTAtZjQxNy00OGFmLTgyNjAtYjQ5YzViM2E3Y2IwIiwidCI6Ijg0YjhiMDNiLTAyMTYtNGU4MC05NTNjLTA2NTVkMmIxMzMyMSIsImMiOjh9',
        active: false,
      },
      {
        label: 'IS Ops Security',
        title: 'IS Ops Security',
        src: 'https://app.powerbi.com/view?r=eyJrIjoiZGY2NWQ0MTEtZDMyMy00NTI0LWIyZGQtY2JhMDk1NWIzODI0IiwidCI6Ijg0YjhiMDNiLTAyMTYtNGU4MC05NTNjLTA2NTVkMmIxMzMyMSIsImMiOjh9',
        active: false,
      },
    ],
  },
  // Section: Infrastructure
  {
    title: 'Infrastructure',
    buttons: [
      {
        label: 'Master Server List',
        title: 'IS Ops Master Server List',
        src: 'https://app.powerbi.com/view?r=eyJrIjoiYzk3Y2FkNjktM2I2YS00MjRiLTkxYjAtNjM4ZjdhYTFjMzI3IiwidCI6Ijg0YjhiMDNiLTAyMTYtNGU4MC05NTNjLTA2NTVkMmIxMzMyMSIsImMiOjh9',
        active: false,
      },
      {
        label: 'DHCP',
        title: 'DHCP Status',
        src: 'https://app.powerbi.com/view?r=eyJrIjoiODc4OThhZTEtNzJiMi00ODg4LThmODQtZDBjZTE3OGI1Y2MxIiwidCI6Ijg0YjhiMDNiLTAyMTYtNGU4MC05NTNjLTA2NTVkMmIxMzMyMSIsImMiOjh9',
        active: false,
      },
      {
        label: 'Automation',
        title: 'Automation Status',
        src: 'https://app.powerbi.com/view?r=eyJrIjoiMDY2N2M4NzEtMTc2MC00YjE3LWI2MDUtOTJhMjdkZWY0NTNjIiwidCI6Ijg0YjhiMDNiLTAyMTYtNGU4MC05NTNjLTA2NTVkMmIxMzMyMSIsImMiOjh9',
        active: false,
      },
      {
        label: 'Entra ID Credentials',
        title: 'Entra ID Credentials',
        src: 'https://app.powerbi.com/view?r=eyJrIjoiNjQyNWRiY2UtOTYwZC00NjgwLTk5YmEtOTUxODNjNjgxY2Q3IiwidCI6Ijg0YjhiMDNiLTAyMTYtNGU4MC05NTNjLTA2NTVkMmIxMzMyMSIsImMiOjh9',
        active: false,
      },
      {
        label: 'UPS Estate',
        title: 'UPS Estate',
        src: 'https://app.powerbi.com/view?r=eyJrIjoiYjkwNTc5M2YtNjgyNi00ODA0LWE5Y2MtZjcwNTdhNTcwOWY3IiwidCI6Ijg0YjhiMDNiLTAyMTYtNGU4MC05NTNjLTA2NTVkMmIxMzMyMSIsImMiOjh9',
        active: false,
      },
    ],
  },
  // Section: Project Reports
  {
    title: 'Project Reports',
    buttons: [
      {
        label: 'IS Project Portfolio',
        title: 'IS Project Portfolio',
        src: 'https://app.powerbi.com/view?r=eyJrIjoiNDMyZmNiY2QtMDM1Ni00MDBmLWIyZDktYzk1YTM4YTE4ZjdmIiwidCI6Ijg0YjhiMDNiLTAyMTYtNGU4MC05NTNjLTA2NTVkMmIxMzMyMSIsImMiOjh9',
        active: false,
      },
      {
        label: 'IS Project Allocation',
        title: 'IS Project Allocation',
        src: 'https://app.powerbi.com/view?r=eyJrIjoiMTkwZTdjZmItODRjNi00NmEzLWE2OWQtYWU5MGI4ZmNlMGZlIiwidCI6Ijg0YjhiMDNiLTAyMTYtNGU4MC05NTNjLTA2NTVkMmIxMzMyMSIsImMiOjh9',
      },
      {
        label: 'Project Rag Status',
        title: 'Projects RAG Status',
        src: 'https://app.powerbi.com/view?r=eyJrIjoiZDcxOWE1MzAtYzQ4MC00NDIwLWIxMTAtOWViNGQyOGYwOWM4IiwidCI6Ijg0YjhiMDNiLTAyMTYtNGU4MC05NTNjLTA2NTVkMmIxMzMyMSIsImMiOjh9',
        active: false,
      },
      {
        label: 'IS Ops Internal',
        title: 'IS Internal Projects',
        src: 'https://app.powerbi.com/view?r=eyJrIjoiZDhiOWEyNTEtM2VmNS00NWIxLWJlYjktMjUxYTUwMTRhMTYyIiwidCI6Ijg0YjhiMDNiLTAyMTYtNGU4MC05NTNjLTA2NTVkMmIxMzMyMSIsImMiOjh9',
        active: false,
      },
      {
        label: 'iTrent MFA Report',
        title: 'iTrent MFA Project',
        src: 'https://app.powerbi.com/view?r=eyJrIjoiZjYyOGRiY2QtYzBjOC00YTdjLWJlMmEtNzFjNWM4M2ZkNThjIiwidCI6Ijg0YjhiMDNiLTAyMTYtNGU4MC05NTNjLTA2NTVkMmIxMzMyMSIsImMiOjh9',
        active: false,
      },
      ,
    ],
  },
  // Section: IS SLT Reports
  {
    title: 'IS SLT Reports',
    buttons: [
      {
        label: 'Budget Tracker 2023/24',
        title: 'Budget Tracker 2023/24',
        src: 'https://app.powerbi.com/view?r=eyJrIjoiNDA1YWYyYTItOWFiMy00YWYwLTg1NzMtMGFhMDVhYjljNTllIiwidCI6Ijg0YjhiMDNiLTAyMTYtNGU4MC05NTNjLTA2NTVkMmIxMzMyMSIsImMiOjh9',
        active: false,
      },
      {
        label: 'IS Stakeholders',
        title: 'IS Stakeholders',
        src: 'https://app.powerbi.com/view?r=eyJrIjoiYTI2NTFmOGMtOWJiYi00NzJlLTkyMmItMjQzNmI4NjFjYmQzIiwidCI6Ijg0YjhiMDNiLTAyMTYtNGU4MC05NTNjLTA2NTVkMmIxMzMyMSIsImMiOjh9',
        active: false,
      },
      ,
    ],
  },
  // Section: Cyber Reports
  {
    title: 'Cyber Reports',
    buttons: [
      {
        label: 'ETech Cyber Actions',
        title: 'Cyber ETech Actions',
        src: 'https://app.powerbi.com/view?r=eyJrIjoiN2IzMmM1ZDEtYjBkMS00MjIxLWE2MzctZmExZDkyNTNmOWRkIiwidCI6Ijg0YjhiMDNiLTAyMTYtNGU4MC05NTNjLTA2NTVkMmIxMzMyMSIsImMiOjh9',
        active: false,
      },
      {
        label: 'Orange Cyber Actions',
        title: 'Cyber Orange Actions',
        src: 'https://app.powerbi.com/view?r=eyJrIjoiMGQ2YmRjZGItNWJiYS00NTM0LWIxMzYtYWNlZjIwOWMyMjEyIiwidCI6Ijg0YjhiMDNiLTAyMTYtNGU4MC05NTNjLTA2NTVkMmIxMzMyMSIsImMiOjh9',
        active: false,
      },
      ,
    ],
  },
  // Section: Staff & Budget Reports
  {
    title: 'Staff Reports',
    buttons: [
      {
        label: 'IS Ops Skills',
        title: 'IS Ops Skills',
        src: 'https://app.powerbi.com/view?r=eyJrIjoiZmUzZmIyNTQtNWI4NC00NWQyLWE4NWEtMmRhOWZlOGNiMWQ0IiwidCI6Ijg0YjhiMDNiLTAyMTYtNGU4MC05NTNjLTA2NTVkMmIxMzMyMSIsImMiOjh9',
        active: false,
      },
      {
        label: 'IS Staff Report',
        title: 'IS Staff Report',
        src: 'https://app.powerbi.com/view?r=eyJrIjoiNWMzYTFmZTktMzBhNi00MzA2LThmNjktZmE2OGVlZTlkODM4IiwidCI6Ijg0YjhiMDNiLTAyMTYtNGU4MC05NTNjLTA2NTVkMmIxMzMyMSIsImMiOjh9',
        active: false,
      },
    ],
  },
  // Section: Business Reports
  {
    title: 'Business Reports',
    buttons: [
      {
        label: 'Visitor Numbers',
        title: 'Visitor Numbers',
        src: 'https://app.powerbi.com/view?r=eyJrIjoiNTllMzZhNjUtNGY3ZC00YjFkLTk2ZjgtMmI2N2FjNTM4ZTViIiwidCI6Ijg0YjhiMDNiLTAyMTYtNGU4MC05NTNjLTA2NTVkMmIxMzMyMSIsImMiOjh9',
        active: false,
      },
      {
        label: 'All Site Visitors',
        title: 'Security: All Sites',
        src: 'https://app.powerbi.com/view?r=eyJrIjoiYWQ1ZDMxNmQtNzExYy00NmFmLTgxNzAtYjUyODRlNDgzMjk5IiwidCI6Ijg0YjhiMDNiLTAyMTYtNGU4MC05NTNjLTA2NTVkMmIxMzMyMSIsImMiOjh9',
        active: false,
      },
      {
        label: 'HCG Site Visitors',
        title: 'Security: HCG Only',
        src: 'https://app.powerbi.com/view?r=eyJrIjoiNDlkZTJkMmQtZmY0Yi00Y2Q4LTlhYzQtYTlkNzAwOTQxZjg3IiwidCI6Ijg0YjhiMDNiLTAyMTYtNGU4MC05NTNjLTA2NTVkMmIxMzMyMSIsImMiOjh9',
        active: false,
      },
      {
        label: 'Microsoft 365 Usage',
        title: 'Microsoft 365 Usage',
        src: 'https://app.powerbi.com/reportEmbed?reportId=52e95286-9abb-4164-b6b6-91cd34cfe1a0&appId=6ae0e600-ae42-4a39-9d48-94a453685803&autoAuth=true&ctid=84b8b03b-0216-4e80-953c-0655d2b13321&filterPaneEnabled=false',
        active: false,
      },
    ],
  },
  //Section: Other Reports
  {
    title: 'Other Reports',
    buttons: [
      {
        label: 'Customer Feedback',
        title: 'Customer Feedback',
        src: 'https://app.powerbi.com/reportEmbed?reportId=1b737ef5-f465-4ff9-adee-2fcabca0475f&autoAuth=true&ctid=84b8b03b-0216-4e80-953c-0655d2b13321&filterPaneEnabled=false',
        active: false,
      },
    ],
  },
  // Additional buttons to open new windows
  {
    title: 'Other Links',
    buttons: [
      {
        label: 'Queue-it',
        title: 'Queue-it',
        src: 'https://hrpuk.go.queue-it.net/app/monitoring/hrpjavaticketslive/queue/7d39cd16-10f3-42eb-9440-49088a76a53f/guest',
        active: false,
      },
      {
        label: 'HRP Web Perfomance',
        title: 'HRP Web Perfomance',
        src: 'https://lookerstudio.google.com/u/0/reporting/63adb010-b8b3-46ed-b8e2-5546fa98476f/page/p_1eu8x4aw7c?s=lshEULIqmcc',
        active: false,
      },
      {
        label: 'IT App',
        title: 'IT App',
        src: 'https://apps.powerapps.com/play/e/default-84b8b03b-0216-4e80-953c-0655d2b13321/a/61e4ca0f-13ad-4ce2-8fc6-7c87620d353b?tenantId=84b8b03b-0216-4e80-953c-0655d2b13321',
        active: false,
      },
      {
        label: 'IT Department App',
        title: 'IT App',
        src: 'https://apps.powerapps.com/play/e/default-84b8b03b-0216-4e80-953c-0655d2b13321/a/61e4ca0f-13ad-4ce2-8fc6-7c87620d353b?tenantId=84b8b03b-0216-4e80-953c-0655d2b13321',
        active: false,
      },
      {
        label: 'Bytes Quantum',
        title: 'Bytes Quantum<',
        src: 'https://quantum.bytes.co.uk/#/billing/subscriptions',
        active: false,
      },
    ],
  },
];

export default buttonData;
