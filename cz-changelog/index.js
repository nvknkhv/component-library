/* eslint-disable global-require */
/* eslint-disable vars-on-top */
/* eslint-disable func-names */
/* eslint-disable radix */
/* eslint-disable no-var */
/* eslint-disable no-empty */
/* eslint-disable import/no-extraneous-dependencies */

'format cjs';

var { configLoader } = require('commitizen');

var engine = require('./engine');
var conventionalCommitTypes = require('./types');

var config = configLoader.load();
var options = {
    types: conventionalCommitTypes.types,
    defaultType: process.env.CZ_TYPE || config.defaultType,
    defaultScope: process.env.CZ_SCOPE || config.defaultScope,
    defaultSubject: process.env.CZ_SUBJECT || config.defaultSubject,
    defaultBody: process.env.CZ_BODY || config.defaultBody,
    defaultIssues: process.env.CZ_ISSUES || config.defaultIssues,
    maxHeaderWidth:
        (process.env.CZ_MAX_HEADER_WIDTH &&
            parseInt(process.env.CZ_MAX_HEADER_WIDTH)) ||
        config.maxHeaderWidth ||
        100,
    maxLineWidth:
        (process.env.CZ_MAX_LINE_WIDTH &&
            parseInt(process.env.CZ_MAX_LINE_WIDTH)) ||
        config.maxLineWidth ||
        100,
};

(function (opts) {
    try {
        var commitlintLoad = require('@commitlint/load');
        commitlintLoad().then(function (clConfig) {
            if (clConfig.rules) {
                var maxHeaderLengthRule = clConfig.rules['header-max-length'];
                if (
                    typeof maxHeaderLengthRule === 'object' &&
                    maxHeaderLengthRule.length >= 3 &&
                    !process.env.CZ_MAX_HEADER_WIDTH &&
                    !config.maxHeaderWidth
                ) {
                    opts.maxHeaderWidth = maxHeaderLengthRule[2];
                }
            }
        });
    } catch (err) {}
})(options);

module.exports = engine(options);