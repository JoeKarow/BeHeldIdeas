module.exports = {
  onPreBuild: async ({ utils: { build, run } }) => {
    try {
      console.log('Attempting pnpm installation')
      await run.command('npm install -g pnpm')
      console.log('Installing packages with pnpm')
      await run.command('pnpm install --frozen-lockfile=false')
    } catch (error) {
      console.log('Ugh - something went wrong.')
      return build.failBuild(error)
    }
  }
}
