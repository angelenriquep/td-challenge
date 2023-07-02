import { ContainerBuilder, YamlFileLoader } from 'node-dependency-injection';

// NB: Remember, dependebcy injetor cares of instaciation order!

const container = new ContainerBuilder();
const loader = new YamlFileLoader(container);
const env = process.env.NODE_ENV || 'dev';

async function loadConfig() {
  await loader.load(`${__dirname}/application_${env}.yaml`)
}

export { container, loadConfig };
