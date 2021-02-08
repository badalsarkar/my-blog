export const PayPalData = {
  summary: {
    name: "PayPal/Butterfly",
    description: "An application transformation tool, managed by PayPal.",
    tools: ["Java", "Gradle", "TestNG", "LOG4J2"],
    contribution: 5,
    contributionLink:
      "https://github.com/pulls?q=is%3Apr+author%3Abadalsarkar+archived%3Afalse+is%3Aclosed+repo%3Apaypal%2Fbutterfly",
    detailsLink: "/work-details/opensource/paypal-butterfly",
  },
  details: {
    about:
      "Butterfly is an application code transformation tool, \
      and commonly it is used to perform automated application migrations, \
      upgrades and source code and configuration changes.",
    tools: ["Java", "Gradle", "TestNG", "LOG4J2"],
    currentlyWorking: [
      {
        title: "Add an AWK like Transformation Operation",
        link: "https://github.com/paypal/butterfly/issues/129",
        type: "New Feature",
      },
      {
        title: "Modify POM file with pull parsing API, StAX",
        link: "https://github.com/paypal/butterfly/issues/92",
        type: "New Feature",
      },
    ],
    completedWork: [
      {
        title: "Replace Logback with Log4j2",
        link: "https://github.com/paypal/butterfly/pull/367",
        type: "New Feature",
      },
      {
        title: "Allow numbers in extesion property",
        link: "https://github.com/paypal/butterfly/pull/371",
        type: "New Feature",
      },
      {
        title: "Upgrade Guava to v30.0",
        link: "https://github.com/paypal/butterfly/pull/369",
        type: "Bug Fix",
      },
      {
        title: "Improve exception to make it more meaningful",
        link: "https://github.com/paypal/butterfly/pull/362",
        type: "Bug Fix",
      },
      {
        title: "Fix CLI argument parsing",
        link: "https://github.com/paypal/butterfly/pull/361",
        type: "Bug Fix",
      },
    ],
    blogs: [
      {
        title: "Improve CLI argument parsing",
        link:
          "https://badalsarkar.ca/2020/fixing-bug-in-butterfly/2020-10-30-Release02-Fixing-Bug/",
      },
      {
        title:
          "Improve CLI argument parsing: Address change request from maintainer",
        link:
          "https://badalsarkar.ca/2020/dealing-with-change-request/2020-10-30-Release02-Dealing-With-Change-Request/",
      },
      {
        title: "Replace Logback with Log4j2",
        link:
          "https://badalsarkar.ca/2020/new-feature-butterfly/2020-11-21-new-feature-butterfly/",
      },
      {
        title: "Replace Logback with Log4j2: bug fix",
        link:
          "https://badalsarkar.ca/2020/butterfly-bug-fix/2020-11-22-butterfly-bug-fixed/",
      },
      {
        title: "Implementing Apache Kafka",
        link:
          "https://badalsarkar.ca/2020/kafka-butterfly/2020-12-04-kafka-in-butterfly/",
      },
    ],
  },
}
