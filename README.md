[![New Relic One Catalog Project header](https://github.com/newrelic/opensource-website/raw/master/src/images/categories/New_Relic_One_Catalog_Project.png)](https://opensource.newrelic.com/oss-category/#new-relic-one-catalog-project)

# New Relic Quickstarts![Deploy website](https://github.com/newrelic/nr1-quickstarts/workflows/Deploy%20website/badge.svg?branch=master)

Community repository of New Relic dashboards, alerts, and installation instructions. You can find the repository here: https://newrelic.github.io/nr1-quickstarts/

## Open source license

This project is distributed under the [Apache 2 license](LICENSE).

## Installation

[Please follow the instructions here to install Quickstarts into your own New Relic account.](./INSTALLATION.md)

## Adding your own dashboards, alerts or instructions

1. [Fork the Github repository](https://help.github.com/en/github/getting-started-with-github/fork-a-repo#fork-an-example-repository)

2. [Clone your own repository to your local machine](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository)

3. Copy the directory `quickstarts/_template` and it's content to a new directory within the `quickstarts` folder. Choose a name which identifies the main purpose of your quickstart, for example: `rabbitmq`, `apm-errors`, ..

4. Change the dashboards in the `quickstarts/[your dir]/dashboards` folder. You can add multiple screenshots per dashboard as long as they have the same name as your dashboard file. For example `rabbitmq.json` `rabbitmq.png` `rabbitmq.jpeg`. You can add multiple screenshots by putting a number after the filename, for example `rabbitmq1.png`, `rabbitmq2,png`.

5. Edit the `quickstarts/[your dir]/config.yaml` file with your your values.

6. Commit your changes `git add -A` and `git commit -m "My new resource"`. Change the `My new resource` with a description of the resource you've added.

7. Push your changes to Github `git push`

8. [Create a pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request) in the [parent repository](https://github.com/newrelic/nr1-quickstarts/compare?expand=1).

9. Submit and wait for review. We will review as fast as we can, but it can sometimes take a day or two.

Thanks a lot for your submission!


## Development

Check out the [development manual](./DEVELOPMENT.md) to set-up your own local dev environment. This is only needed if you want to make changes to the website or nerdlet, not if you want to add another quickstarts. Follow the instructions above to add or edit a quickstart.

## Support

New Relic has open-sourced this project. This project is provided AS-IS WITHOUT WARRANTY OR DEDICATED SUPPORT. Issues and contributions should be reported to the project here on GitHub.

We encourage you to bring your experiences and questions to the [Explorers Hub](https://discuss.newrelic.com) where our community members collaborate on solutions and new ideas.

## Contributing
Contributions to improve Quickstarts are encouraged! Keep in mind when you submit your pull request, you'll need to sign the CLA via the click-through using CLA-Assistant. You only have to sign the CLA one time per project.
To execute our corporate CLA, which is required if your contribution is on behalf of a company, or if you have any questions, please drop us an email at opensource@newrelic.com.

To all contributors, we thank you! Without your contribution, this project would not be what it is today.

## Security

As noted in our [security policy](https://github.com/newrelic/nr1-quickstarts/security/policy), New Relic is committed to the privacy and security of our customers and their data. We believe that providing coordinated disclosure by security researchers and engaging with the security community are important means to achieve our security goals.

If you believe you have found a security vulnerability in this project or any of New Relic's products or websites, we welcome and greatly appreciate you reporting it to New Relic through HackerOne.

## License
New Relic quickstarts is licensed under the [Apache 2.0](http://apache.org/licenses/LICENSE-2.0.txt) License.

