import React, {FC, useState} from 'react';
import {Col, Row, Radio, Table, Typography} from 'antd';
import {ColumnsType, TableProps} from 'antd/es/table';
import {formatDistance, subMinutes} from 'date-fns';
import {finance, internet, time} from 'faker';

import {NetworkStats, PageContentsLayout} from 'components';
import {validatorsColumn, validatorsData} from 'mocks/tableData/validators';
import {banksColumn, banksData} from 'mocks/tableData/banks';

const Nodes: FC = () => {
  const banks = banksData(10);
  const validators = validatorsData(10);

  return (
    <PageContentsLayout>
      <Col span={24}>
        <NetworkStats />
      </Col>

      <Col sm={24} md={12}>
        <Table
          bordered
          columns={validatorsColumn}
          dataSource={validators}
          pagination={false}
          title={() => (
            <Row justify="space-between" align="middle">
              <Typography.Text>Banks</Typography.Text>
            </Row>
          )}
        />
      </Col>
      <Col sm={24} md={12}>
        <Table
          bordered
          columns={banksColumn}
          dataSource={banks}
          pagination={false}
          title={() => (
            <Row justify="space-between" align="middle">
              <Typography.Text>Validators</Typography.Text>
            </Row>
          )}
        />
      </Col>
    </PageContentsLayout>
  );
};

export default Nodes;
