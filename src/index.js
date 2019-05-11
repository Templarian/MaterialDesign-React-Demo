import React from "react";
import ReactDOM from "react-dom";
import Icon, { Stack } from '@mdi/react';
import {
  mdiAccount, mdiAccountOutline, mdiAccountSearch, mdiLoading,
  mdiBlockHelper, mdiColorHelper, mdiFormatColorFill, mdiProgressCheck,
  mdiCircle, mdiCheck, mdiBorderColor, mdiFormatColorText, mdiSmoking,
  mdiShape, mdiShapeOutline, mdiArrowUpBoldOutline, mdiArrowUpBold,
  mdiArrowDownBoldCircle, mdiBorderAll, mdiBorderRight, mdiMessage,
  mdiMessageAlertOutline, mdiGithubCircle, mdiNpmVariantOutline,
  mdiCubeUnfolded
} from "@mdi/js";

const App = (props) => (
  <div className="App">
    <h1>
      Demo
      <code>npm install @mdi/react</code>
      <a href="https://github.com/Templarian/MaterialDesign-React" title="View on GitHub">
        <Icon path={mdiGithubCircle} color="#FFF" />
      </a>
      <a href="https://npmjs.com/package/@mdi/react" title="NPM">
        <Icon path={mdiNpmVariantOutline} color="#FFF" />
      </a>
    </h1>
    <h2>Icon Component</h2>
    <div>
      <div>
        <h3>Regular</h3>
        <Icon path={mdiAccount} />
        <Icon path={mdiAccountOutline} />
        <Icon path={mdiAccountSearch} />
        <pre><code>{[
          '<Icon path={mdiAccount}/>',
          '<Icon path={mdiAccountOutline}/>',
          '<Icon path={mdiAccountSearch}/>'
        ].join('\n')}</code></pre>
      </div>
      <div>
        <h3>Spin</h3>
        <Icon path={mdiLoading} spin />
        <Icon path={mdiLoading} spin={false} />
        <Icon path={mdiLoading} spin={true} />
        <Icon path={mdiLoading} spin={1} />
        <Icon path={mdiLoading} spin={5} />
        <Icon path={mdiLoading} spin={-2} />
        <Icon path={mdiLoading} spin={-5} />
        <pre><code>{[
          '<Icon path={mdiLoading} spin/>',
          '<Icon path={mdiLoading} spin={false}/>',
          '<Icon path={mdiLoading} spin={true}/>',
          '<Icon path={mdiLoading} spin={1}/>',
          '<Icon path={mdiLoading} spin={5}/>',
          '<Icon path={mdiLoading} spin={-2}/>',
          '<Icon path={mdiLoading} spin={-5}/>'
        ].join('\n')}</code></pre>
      </div>
      <div>
        <h3>Color</h3>
        <Icon path={mdiAccountSearch} color="red" />
        <Icon path={mdiAccountSearch} color="#F0F" />
        <Icon path={mdiAccountSearch} color="rgba(255, 0, 0, 0.5)" />
        <pre><code>{[
          '<Icon path={mdiAccountSearch} color="red"/>',
          '<Icon path={mdiAccountSearch} color="#F0F"/>',
          '<Icon path={mdiAccountSearch} color="rgba(255, 0, 0, 0.5)"/>'
        ].join('\n')}</code></pre>
      </div>
      <div>
        <h3>Rotate</h3>
        <Icon path={mdiAccountSearch} rotate={0} />
        <Icon path={mdiAccountSearch} rotate={45} />
        <Icon path={mdiAccountSearch} rotate={90} />
        <pre><code>{[
          '<Icon path={mdiAccountSearch} rotate={0}/>',
          '<Icon path={mdiAccountSearch} rotate={45}/>',
          '<Icon path={mdiAccountSearch} rotate={90}/>'
        ].join('\n')}</code></pre>
      </div>
      <div>
        <h3>Horizontal</h3>
        <Icon path={mdiAccountSearch} horizontal />
        <pre><code>{[
          '<Icon path={mdiAccountSearch} horizontal/>'
        ].join('\n')}</code></pre>
      </div>
      <div>
        <h3>Vertical</h3>
        <Icon path={mdiAccountSearch} vertical />
        <pre><code>{[
          '<Icon path={mdiAccountSearch} vertical/>'
        ].join('\n')}</code></pre>
      </div>
      <div>
        <h3>Horizontal + Rotate + Spin</h3>
        <Icon path={mdiAccountSearch} horizontal rotate={90} spin />
        <pre><code>{[
          '<Icon path={mdiAccountSearch} horizontal rotate={90} spin/>'
        ].join('\n')}</code></pre>
      </div>
      <div>
        <h3>Size</h3>
        <Icon path={mdiAccountSearch} size={0.5} />
        <Icon path={mdiAccountSearch} size={1} />
        <Icon path={mdiAccountSearch} size={1.5} />
        <Icon path={mdiAccountSearch} size={2} />
        <Icon path={mdiAccountSearch} size={'48px'} />
        <pre><code>{[
          '<Icon path={mdiAccountSearch} size={0.5}/>',
          '<Icon path={mdiAccountSearch} size={1}/>',
          '<Icon path={mdiAccountSearch} size={1.5}/>',
          '<Icon path={mdiAccountSearch} size={2}/>',
          `<Icon path={mdiAccountSearch} size={'48px'}/>`
        ].join('\n')}</code></pre>
      </div>
    </div>
    <h2>Stack Component</h2>
    <div>
      <div>
        <h3>Basic</h3>
        <Stack>
          <Icon path={mdiSmoking} />
          <Icon path={mdiBlockHelper} color="red" />
        </Stack>
        <pre><code>{[
          '<Stack>',
          '  <Icon path={mdiSmoking}/>',
          '  <Icon path={mdiBlockHelper} color="red"/>',
          '</Stack>'
        ].join('\n')}</code></pre>
      </div>
      <div>
        <h3>Color Helper</h3>
        <Stack>
          <Icon path={mdiFormatColorFill} />
          <Icon path={mdiColorHelper} color="red" />
        </Stack>
        <Stack>
          <Icon path={mdiBorderColor} />
          <Icon path={mdiColorHelper} color="green" />
        </Stack>
        <Stack>
          <Icon path={mdiFormatColorText} />
          <Icon path={mdiColorHelper} color="blue" />
        </Stack>
        <pre><code>{[
          '<Stack>',
          '  <Icon path={mdiFormatColorFill}/>',
          '  <Icon path={mdiColorHelper} color="blue"/>',
          '</Stack>'
        ].join('\n')}</code></pre>
      </div>
      <div>
        <h3>Using Shapes</h3>
        <Stack>
          <Icon path={mdiCheck} />
          <Icon path={mdiLoading} spin color="green" />
        </Stack>
        <Stack>
          <Icon path={mdiCircle} color="#A4BB1A" />
          <Icon path={mdiProgressCheck} />
        </Stack>
        <Stack>
          <Icon path={mdiCircle} color="#A4BB1A" />
          <Icon path={mdiArrowDownBoldCircle} />
        </Stack>
      </div>
      <div>
        <h3>Shading</h3>
        <Stack>
          <Icon path={mdiShape} color="rgba(0,0,0,0.2)" />
          <Icon path={mdiShapeOutline} />
        </Stack>
        <Stack>
          <Icon path={mdiArrowUpBold} color="rgba(0,0,0,0.2)" />
          <Icon path={mdiArrowUpBoldOutline} />
        </Stack>
        <Stack>
          <Icon path={mdiBorderAll} color="rgba(0,0,0,0.2)" />
          <Icon path={mdiBorderRight} />
        </Stack>
        <Stack>
          <Icon path={mdiMessage} color="rgba(8,159,251,0.2)" />
          <Icon path={mdiMessageAlertOutline} />
        </Stack>
      </div>
      <div>
        <h3>Scaling</h3>
        <Stack size={2}>
          <Icon path={mdiSmoking} color="#444" size={1.5} />
          <Icon path={mdiBlockHelper} color="red" />
        </Stack>
        <Stack size={2}>
          <Icon path={mdiAccountSearch} color="#444" size={1.5} horizontal />
          <Icon path={mdiBlockHelper} color="red" />
        </Stack>
        <Stack size={2}>
          <Icon path={mdiAccountSearch} color="#444" size={1.5} horizontal spin />
          <Icon path={mdiBlockHelper} color="red" spin={1} />
        </Stack>
        <pre><code>{[
          '<Stack size={2}>',
          '  <Icon path={mdiSmoking} color="#444" size={1.5}/>',
          '  <Icon path={mdiBlockHelper} color="red"/>',
          '</Stack>'
        ].join('\n')}</code></pre>
      </div>
    </div>
    <footer>
      Report issues on <a href="https://github.com/Templarian/MaterialDesign-React/issues">GitHub</a>&nbsp;&#8226;
      View the icons at <a href="https://materialdesignicons.com/">MaterialDesignIcons.com</a>&nbsp;&#8226;
      Maintained by Austin Andrews <a href="https://twitter.com/templarian">@templarian</a>&nbsp;&#8226;
      <a href="http://templarian.com"><Icon path={mdiCubeUnfolded} color="#FFF" /></a>
    </footer>
  </div>
)

ReactDOM.render(<App />, document.getElementById("root"));
