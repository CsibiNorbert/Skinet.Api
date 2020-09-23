﻿using Microsoft.AspNetCore.Mvc;
using Skinet.Errors;

namespace Skinet.Controllers
{
    [Route("error/{code}")]
    public class ErrorController : BaseApiController
    {
        public IActionResult Error(int code)
        {
            return new ObjectResult(new ApiResponse(code));
        }
    }
}
