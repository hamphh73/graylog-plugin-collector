import React from 'react';

import { Row, Col, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import DocsHelper from 'util/DocsHelper';
import DocumentationLink from 'components/support/DocumentationLink';

import PageHeader from 'components/common/PageHeader';
import ConfigurationsList from './ConfigurationsList';

const ConfigurationsPage = React.createClass({
  render() {
    return (
      <span>
        <PageHeader title="Collector Sidecar Configurations">
          <span>
            The Collector Sidecar runs next to your favourite log collector and configures it for you. Here you can manage the Sidecar configurations.
          </span>

          <span>
            Read more about the collector sidecar in the{' '}
            <DocumentationLink page={DocsHelper.PAGES.COLLECTOR_SIDECAR} text="Graylog documentation" />.
          </span>

          <span>
            <LinkContainer to={'/system/collectors/'}>
              <Button bsStyle="info">Show Collectors</Button>
            </LinkContainer>
          </span>
        </PageHeader>

        <Row className="content">
          <Col md={12}>
            <ConfigurationsList />
          </Col>
        </Row>
      </span>
    );
  },
});

export default ConfigurationsPage;
