/*****************************************************************************
 * Import
 *****************************************************************************/
import React from "react";
import { Text } from 'react-native';

import { test } from "@org/utils";
import { Extra } from "utils/constants";

/*****************************************************************************
 * Page
 *****************************************************************************/

export default function Page() {
  return (
    <Text>
      {test} {Extra.test || "hmm"}
    </Text>
  );
}
