﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Skinet.Errors
{
    public class ApiException : ApiResponse
    {
        /// <summary>
        /// Throwing exceptions
        /// </summary>
        public string? Details { get; set; }

        public ApiException(int statusCode, string? message = null, string? details = null) : base(statusCode, message)
        {
            Details = details;
        }
    }
}