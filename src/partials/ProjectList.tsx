import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const ProjectList = () => (
  <Section
    title={
      <>
        Open-Source <GradientText>Contributions</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="ORM-DAO-Simplified"
        description="A lightweight, type-safe Data Access Object (DAO) library designed as a practical alternative to heavyweight ORMs. 
        This package gives developers full control over SQL while reducing boilerplate and enforcing clean separation between business logic and database access."
        link="https://github.com/GeorgeMugale/orm-dao-simplified"
        img={{
          src: '/assets/images/database.png',
          alt: 'Project ORM/DAO',
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>MySQL</Tags>
            <Tags color={ColorTags.LIME}>ORM</Tags>
            <Tags color={ColorTags.SKY}>DAO</Tags>
            <Tags color={ColorTags.ROSE}>TypeScript</Tags>
          </>
        }
      />
      <Project
        name="Express HTTP Status Handler"
        description="A lightweight utility that standardizes HTTP responses in Express applications. 
        This package simplifies API development by reducing repetitive response code and enforcing consistent status codes and messages across all endpoints."
        link="https://github.com/GeorgeMugale/express-http-status-handler"
        img={{ src: '/assets/images/api.png', alt: 'Project Fire' }}
        category={
          <>
            <Tags color={ColorTags.VIOLET}>Express.js</Tags>
            <Tags color={ColorTags.EMERALD}>Node.js</Tags>
            <Tags color={ColorTags.YELLOW}>TypeScript</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
